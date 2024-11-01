<script lang="ts">
	import { Code, Transition, Action } from '@animotion/core'

	let text: HTMLParagraphElement
	let table: HTMLTableElement
	let code: ReturnType<typeof Code>
</script>

<Transition>
	<!-- <p bind:this={text} class="text-8xl font-bold drop-shadow-sm pb-12">And we get a flat dataframe!</p> -->

	<div bind:this={table} class="h-full w-full">
		<table class="h-full w-full border-collapse">
			<thead>
				<tr>
					<th>name</th>
					<th>population</th>
					<th>state</th>
					<th>shortname</th>
					<th>info.governor</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Dade</td>
					<td>12345</td>
					<td>Florida</td>
			<td>FL</td>
			<td>Rick Scott</td>
		</tr>
		<tr>
			<td>Broward</td>
			<td>40000</td>
			<td>Florida</td>
			<td>FL</td>
			<td>Rick Scott</td>
		</tr>
		<tr>
			<td>Palm Beach</td>
			<td>60000</td>
			<td>Florida</td>
			<td>FL</td>
			<td>Rick Scott</td>
		</tr>
		<tr>
			<td>Summit</td>
			<td>1234</td>
			<td>Ohio</td>
			<td>OH</td>
			<td>John Kasich</td>
		</tr>
		<tr>
			<td>Cuyahoga</td>
			<td>1337</td>
			<td>Ohio</td>
			<td>OH</td>
			<td>John Kasich</td>
		</tr>
		</table>
	</div>
</Transition>
