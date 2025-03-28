<script lang="ts">
	import '../app.css';
	import Button from '../components/Button.svelte';

	let { children } = $props();
</script>

<div
	class="flex min-h-screen w-full flex-col items-center justify-start bg-cover bg-center pt-[3vh] pb-[3vh]"
>
	<div class="h-fit min-h-[40vh] w-[70%] border-4 border-white bg-blue-100">
		<div class="flex flex-row bg-slate-800 text-2xl font-bold text-white">
			<Button href="/" text="MZ Hockey"></Button>
			<Button href="/contact" text="Contact"></Button>
			<Button href="/booking" text="Booking"></Button>
			<Button href="/admin" text="(admin)"></Button>
		</div>
		<div class="px-8 pb-8">
			{@render children()}
		</div>
	</div>
</div>
