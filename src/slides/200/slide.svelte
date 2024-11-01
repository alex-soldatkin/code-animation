<script lang="ts">
	import { Code, Transition, Action } from '@animotion/core'
	import { tween } from '@animotion/motion'

	let text: HTMLParagraphElement
	let code: ReturnType<typeof Code>
	let circle = tween({ x: 0, y: 80, r: 80, fill: '#00ffff' })
</script>

<Transition
	do={async () => {
		text.classList.replace('text-6xl', 'text-8xl')
		await code.update``
	}}
>
	<p bind:this={text} class="text-8xl font-bold drop-shadow-sm">
		Enter 
		<Code code="pd.json_normalize(data)" lang="python" />
	</p>
</Transition>

<Transition
	do={async () => {
		await code.update`
			data = [
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
		lang="python"
		theme="poimandres"
		code={`
			data = [
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

<Action
	do={async () => {
		await code.update`
			result = pd.json_normalize(data, 
				"counties", 
				["state", "shortname", ["info", "governor"]]
			)
			result
		`
	}}
/>

<Action
	do={async () => {
		await code.update`
				data = [
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

<Action
	do={async () => {
		await code.update`
			result = pd.json_normalize(data, "counties", ["state", "shortname", ["info", "governor"]])
			result
			>>> result  # your output
					"name"    "population" "state"  "shortname" "info.governor"
			0        "Dade"       12345   "Florida"    "FL"    "Rick Scott"
			1     "Broward"       40000   "Florida"    "FL"    "Rick Scott"
			2  "Palm Beach"       60000   "Florida"    "FL"    "Rick Scott"
			3      "Summit"        1234   "Ohio"       "OH"    "John Kasich"
			4    "Cuyahoga"        1337   "Ohio"       "OH"    "John Kasich"
		`
	}}
/>

<Action
	do={async () => {
		await code.update`
result = pd.json_normalize(data, "counties", ["state", "shortname", ["info", "governor"]])
result
>>> result  # output--this is a dataframe
         name    population state  shortname info.governor
0        Dade       12345   Florida    FL    Rick Scott
1     Broward       40000   Florida    FL    Rick Scott
2  Palm Beach       60000   Florida    FL    Rick Scott
3      Summit        1234   Ohio       OH    John Kasich
4    Cuyahoga        1337   Ohio       OH    John Kasich
		`
	}}
/>
