<script lang="ts">
	import type { Term } from '$lib/types';
	import H1 from '../../components/H1.svelte';
	import { getDotw, formatDate } from '$lib';
	import { goto } from '$app/navigation';

	let { data } = $props();
	let terms: Term[] = $state(data.terms);

	async function bookTerm(term_id: number) {
		goto('/book/' + term_id.toString());
	}
</script>

<H1 text="Terminy"></H1>
<div class="p-4">
	{#each terms as term}
		<div class="flex flex-row pt-2">
			<div class="">{getDotw(term.date)}</div>
			<div class="pl-4">{formatDate(term.date)}</div>
			<div class="pl-4">{term.timeStart} - {term.timeEnd}</div>
			<div class="pl-4">{term.location}</div>
			<div class="pl-4">{term.type}</div>
			<button class="ml-8 cursor-pointer" onclick={(e) => bookTerm(term.id)}>Registrovat</button>
		</div>
	{/each}
</div>
