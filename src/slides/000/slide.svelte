<script lang="ts">
	import { Code, Transition, Action } from '@animotion/core'
	import { tween } from '@animotion/motion'

	let text: HTMLParagraphElement
	let code: ReturnType<typeof Code>
	// let circle = tween({ x: 0, y: 80, r: 80, fill: '#00ffff' })
</script>

<Transition
	do={async () => {
		text.classList.replace('text-6xl', 'text-8xl')
		await code.update``
	}}
>
	<p bind:this={text} class="text-8xl font-bold drop-shadow-sm">Flattening data: JSON to CSV</p>
</Transition>