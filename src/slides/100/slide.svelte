<script lang="ts">
	import { Code, Transition, Action } from '@animotion/core'
	import { tween } from '@animotion/motion'

	let text: HTMLParagraphElement
	let code: ReturnType<typeof Code>
	// let circle = tween({ x: 0, y: 80, r: 80, fill: '#00ffff' })
</script>

<!-- <Transition
	do={async () => {
		text.classList.replace('text-6xl', 'text-8xl')
		await code.update``
	}}
>
	<p bind:this={text} class="text-8xl font-bold drop-shadow-sm">Flattening data: JSON to CSV</p>
</Transition> -->

<Transition
	do={async () => {
		await code.update`
			[
				{
					"state": "Florida",
					"shortname": "FL",
					"info": {"governor": "Rick Scott"},
					"counties": [
						{"name": "Dade", "population": 12345},
						{"name": "Broward", "population": 40000},
						{"name": "Palm Beach", "population": 60000},
					],
				},
				{
					"state": "Ohio",
					"shortname": "OH",
					"info": {"governor": "John Kasich"},
					"counties": [
						{"name": "Summit", "population": 1234},
						{"name": "Cuyahoga", "population": 1337},
					],
				},
			]
		`
	}}
	class="mt-16"
>
	<Code
		bind:this={code}
		lang="json"
		theme="poimandres"
		code={`
			[
				{
					"state": "Florida",
					"shortname": "FL",
					"info": {"governor": "Rick Scott"},
					"counties": [
						{"name": "Dade", "population": 12345},
						{"name": "Broward", "population": 40000},
						{"name": "Palm Beach", "population": 60000},
					],
				},
				{
					"state": "Ohio",
					"shortname": "OH",
					"info": {"governor": "John Kasich"},
					"counties": [
						{"name": "Summit", "population": 1234},
						{"name": "Cuyahoga", "population": 1337},
					],
				},
			]
		`}
		options={{ duration: 2200, stagger: 0.3, containerStyle: true }}
	/>
</Transition>

<Transition
	do={async () => {
		await code.update`
			[
				{
					"name_of_key": "corresponding value",
				},
				{
					"name_of_key": "corresponding value",
				},
			]
		`
		// await circle.to({ x: 0, fill: '#00ffff' })
	}}
	class="mt-16"
></Transition>

<Transition
	do={async () => {
		await code.update`
			[
				{
					"state": "Florida",
					"shortname": "FL",
				},
				{
					"state": "Ohio",
					"shortname": "OH",
				},
			]
		`
	}}
	class="mt-16"
></Transition>


<Action
	do={async () => {
		await code.update`
			[
				{
					"state": "Florida",
					"shortname": "FL",
					// we can nest objects (dictionaries) inside of objects
					"info": {"governor": "Rick Scott"},
					// and arrays (lists) inside of objects
					"counties": [
						// ...
					],
				},
				{
					"state": "Ohio",
					"shortname": "OH",
				},
			]

		`
	}}
	
/>


<Action
	do={async () => {
		await code.update`
			[
				{
					"state": "Florida",
					"shortname": "FL",
					// we can nest objects (dictionaries) inside of objects
					"info": {"governor": "Rick Scott"},
					// and arrays (lists) inside of objects
					"counties": [
						{"name": "Dade", "population": 12345},
						{"name": "Broward", "population": 40000},
						{"name": "Palm Beach", "population": 60000},
					],
				},
				{
					"state": "Ohio",
					"shortname": "OH",
				},
			]
		`
		// await code.selectLines`9-10`
	}}
	actions={[
		() => code.selectLines`5-6`,
		() => code.selectLines`7-10`
	]}
/>

<Action
	do={async () => {
		// await code.selectLines`*`
		await code.update`
			[
				{
					"state": "Florida",
					"shortname": "FL",
					"info": {"governor": "Rick Scott"},
					"counties": [
						{"name": "Dade", "population": 12345},
						{"name": "Broward", "population": 40000},
						{"name": "Palm Beach", "population": 60000},
					],
				},
				{
					"state": "Ohio",
					"shortname": "OH",
					"info": {"governor": "John Kasich"},
					"counties": [
						// repeat the same structure for each item in the list
					],
				},
			]
		`
	}}
	await code.selectLines`15-17`,
/>


<Action
	do={async () => {
		// await code.selectLines`*`
		await code.update`
			[
				{
					"state": "Florida",
					"shortname": "FL",
					"info": {"governor": "Rick Scott"},
					"counties": [
						{"name": "Dade", "population": 12345},
						{"name": "Broward", "population": 40000},
						{"name": "Palm Beach", "population": 60000},
					],
				},
				{
					"state": "Ohio",
					"shortname": "OH",
					"info": {"governor": "John Kasich"},
					"counties": [
						{"name": "Summit", "population": 1234},
						{"name": "Cuyahoga", "population": 1337},
					],
				},
			]
		`
		
	}}
/>

<Transition>
	<p class="text-4xl inset-x-0 top-0">
		Now we have a list of dictionaries, each of which contains some key-value pairs.
	</p>
</Transition>

<Transition>
	<p class="text-4xl inset-x-0 top-0">
		But how do we flatten this? 
	</p>
</Transition>


<Action
	do={async () => {
		await code.update`
[
	// we can use a list of dictionaries to flatten the data
]
		`
	}}
	await code.selectLines`2`
/>
<Action
	do={async () => {
		await code.update`
[
	// we can use a list of lists to flatten the data
	// where keys are the names of the columns
]
		`
	}}
	await code.selectLines`3`
/>

<Action
do={async () => {
	await code.update`
[
	// we can use a list of lists to flatten the data
	// where keys are the names of the columns
	// and values are the contents of the rows
]
	`
}}
	await code.selectLines`4`
/>
<Action
	do={async () => {
		await code.update`
			[
				// first row
				{
					"column_name_1": "row1col1_value",
					"column_name_2": "row1col2_value",
				},
				// second row
				{
					"column_name_1": "row2col1_value",
					"column_name_2": "row2col2_value",
				},
			]
		`
	}}
/>

<Action
	do={async () => {

		await code.update`
			"column_name_1", "column_name_2"
			"row1col1_value", "row1col2_value"
			"row2col1_value", "row2col2_value"
		`
	}}
/>
