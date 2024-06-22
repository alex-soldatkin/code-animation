<script lang="ts">
	import { Presentation, Slide, Code } from '@components'
	import { signal } from '@motion'

	const circle = signal(
		{ x: 0, y: 200, r: 80, fill: '#00ffff' },
		{ duration: 2000 }
	)
</script>

<Presentation>
	<Slide animate>
		<p class="font-bold text-8xl">🪄 Magic Python Animotion</p>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mt-8">🪄 Magic Python Animotion</p>

		<div class="w-max mx-auto mt-16" data-id = "ggplot_gapminder_bubble" >
			<Code lang="python" lines="1,4">
				{`
					( # first we enclose the viz in brackets
						ggplot(
								) 
					)
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mt-8">🪄 Magic Python Animotion</p>

		<div class="w-max mx-auto mt-16">
			<Code lang="python" data-id = "ggplot_gapminder_bubble"  lines="2,9|3,8|4|5|6|7">
				{`
					( # then we add the data and map the aesthetics
						ggplot(data = gapminder,
								mapping = aes(
												x = 'gdpPercap', 
												y = 'lifeExp', 
												color = 'continent', 
												size = 'pop'
												)
								) 
					)
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mt-8">🪄 Magic Python Animotion</p>

		<div class="w-max mx-auto mt-16">
			<Code lang="python" data-id = "ggplot_gapminder_bubble"  lines="9">
				{`
					(
						ggplot(data = gapminder,
								mapping = aes(
												x = 'gdpPercap', 
												y = 'lifeExp', 
												color = 'continent', 
												size = 'pop'
												)
								) + # then we start adding layers
					)
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mt-8">🪄 Magic Python Animotion</p>

		<div class="w-max mx-auto mt-16">
			<Code lang="python" data-id = "ggplot_gapminder_bubble"  lines="10">
				{`
					(
						ggplot(data = gapminder,
								mapping = aes(
												x = 'gdpPercap', 
												y = 'lifeExp', 
												color = 'continent', 
												size = 'pop'
												)
								) + 
								geom_point(alpha=0.5) + # add a scatter plot with lower opacity 
					)
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mt-8">🪄 Magic Python Animotion</p>
		<div class="w-max mx-auto mt-16">
			
			<Code lang="python" data-id = "ggplot_gapminder_bubble"  lines="11,12,18|13-17">
				{`
					(
							... )  +
								scale_x_log10( # add a log scale to the x-axis
									breaks = [1_000, 10_000, 25_000, 50_000, 100_000],
									labels = [f'\${numerize(x)}' for x in 
																	[1_000, 10_000, 
																	25_000, 50_000, 
																	100_000] # what does this do?
											]
								) + 
								 theme_minimal() + # add a minimal theme
								 labs( # add labels to the plot
										title = 'Life Expectancy vs. GDP per Capita',
										x = 'GDP per Capita',
										y = 'Life Expectancy',
										color = 'Continent',
										size = 'Population' 
									)
					)
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<p class="font-bold text-6xl mt-8">🪄 Magic Python Animotion</p>
		<div class="w-screen h-screen flex items-center justify-center">	
			<Code lang="python" data-id = "ggplot_gapminder_bubble">
				{`
					(
						ggplot(data = gapminder,
								mapping = aes(
												x = 'gdpPercap', 
												y = 'lifeExp', 
												color = 'continent', 
												size = 'pop'
												)
								) + 
								geom_point(alpha=0.5) + # add a scatter plot with lower opacity 
								scale_x_log10( # add a log scale to the x-axis
									breaks = [1_000, 10_000, 25_000, 50_000, 100_000],
									labels = [f'\${numerize(x)}' for x in 
																	[1_000, 10_000, 
																	25_000, 50_000, 
																	100_000] # what does this do?
											]
								) + 
								 theme_minimal() + # add a minimal theme
								 labs( # add labels to the plot
										title = 'Life Expectancy vs. GDP per Capita',
										x = 'GDP per Capita',
										y = 'Life Expectancy',
										color = 'Continent',
										size = 'Population' 
									)
					)
				`}
			</Code>
		</div>
	</Slide>


</Presentation>
