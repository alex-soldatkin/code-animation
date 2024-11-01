<script lang="ts">
	import { Code, Transition, Action, Presentation, Slide } from '@animotion/core'
	import type { CodeAnimationConfig } from '../types/code-animation'

	let codeInput = ''
	let language = 'javascript'
	let theme = 'poimandres'

	let code: ReturnType<typeof Code>
	let animationConfig: CodeAnimationConfig | null = null

	// Language-specific comment markers
	const COMMENT_MARKERS = {
		javascript: '//',
		typescript: '//',
		python: '#',
		svelte: '//'
	} as const

	function handleCreateAnimation() {
		if (!codeInput.trim()) return

		const chunks = parseCodeIntoChunks(codeInput)
		if (chunks.length === 0) return

		animationConfig = {
			chunks,
			language,
			theme
		}
	}

	function parseCodeIntoChunks(rawCode: string): string[] {
		const commentMarker = COMMENT_MARKERS[language as keyof typeof COMMENT_MARKERS] || '//'
		const splitter = `${commentMarker} ---`
		
		return rawCode
			.split(splitter)
			.map(chunk => chunk.trim())
			.filter(Boolean)
	}
</script>

<!-- <div class="container mx-auto p-4 bg-white"> -->
<!-- Input Section -->
<div class="card bg-base-200 mb-6 shadow-xl bg-white flex flex-col absolute left-0 w-full md:w-1/4 h-auto md:h-full" style="z-index: 10; pointer-events: auto;">
	<div class="card-body flex flex-col items-center gap-2">
		<h2 class="card-title text-sm mt-4">
            CODE ANIMATOR

        </h2>

		<div class="form-control p-4 w-full">
			<!-- <label for="code-input" class="label">
				<span class="label-text text-xs">Paste your code (separate chunks with // ---)</span>
			</label> -->

			<textarea
				id="code-input"
				class="textarea textarea-bordered h-16 md:h-24 w-full p-4" 
				bind:value={codeInput}
				placeholder="Paste your code here, separate chunks with // ---"
				style="pointer-events: auto;"
			></textarea>
		</div>

		<div class="grid grid-cols-1 items-center justify-between w-full gap-8 p-4">
			<div class="form-control">
				<!-- <label for="language-select" class="label">
					<span class="label-text text-xs p-2">Language</span>
				</label> -->
				<select id="language-select" class="select select-bordered select-xs w-full" bind:value={language} style="pointer-events: auto;">
					<option value="javascript">JavaScript</option>
					<option value="typescript">TypeScript</option>
					<option value="python">Python</option>
					<option value="svelte">Svelte</option>
				</select>
			</div>

			<button class="btn btn-primary btn-sm" on:click={handleCreateAnimation} style="pointer-events: auto;">
				Create Animation
			</button>
		</div>
	</div>
</div>

<Presentation

	class=""
>
	<Slide>
		<div class="container mx-auto max-w-4xl p-4">
			<!-- Animation Container -->
			{#if animationConfig}
				<Transition>
					<div class="card bg-base-300 shadow-xl">
						<div class="card-body p-4">
							<div class="flex min-h-[200px] items-center justify-center">
								<Code
									bind:this={code}
									lang={language}
									{theme}
									codes={animationConfig.chunks}
									options={{
										duration: 1000,
										stagger: 0.3,
										containerStyle: false
									}}
								/>
							</div>

							<div class="text-base-content/60 mt-4 flex justify-center gap-4 text-sm">
								<span>Use ← → arrows or spacebar to navigate</span>
							</div>

							<Action
								undo={() => code.selectLines`*`}
								actions={animationConfig.chunks.map((_, index) => async () => {
									await code.selectLines`*`
								})}
							/>
						</div>
					</div>
				</Transition>
			{/if}
		</div>
	</Slide>
</Presentation>

