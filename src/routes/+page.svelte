<script lang="ts">
	import { Presentation, Slides } from '@animotion/core'
	import { Recorder } from '@animotion/core'
</script>



<Presentation
	options={{
		history: true,
		transition: 'slide',
		controls: true,
		progress: true
	}}
>
	<Slides center={true} />
	<!-- <Recorder
		codec="video/mp4"
		fps={90}
		videoBitrate={2500}
		audioBitrate={320}
		systemAudio={true}
		useTimer={false}
		useMicrophone={true}
	/> -->
</Presentation>