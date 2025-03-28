<script>
	import H1 from '../../components/H1.svelte';
	import Paragraph from '../../components/Paragraph.svelte';
	import { Terms } from '$lib/store';
	import Button from '../../components/Button.svelte';

	let terms = $state();
	Terms.subscribe((store) => {
		terms = store;
	});
</script>

<H1 text="Terminy:"></H1>
<div class="p-4">
	{#each Object.entries(terms) as [id, term]}
		<div class="flex flex-row pt-2">
			<div class="">{term.dotw}</div>
			<div class="pl-4">{term.date}</div>
			<div class="pl-4">{term.time}</div>
			<a href="book/{id}" class="ml-8">Prihlasit</a>
		</div>
	{/each}
</div>
