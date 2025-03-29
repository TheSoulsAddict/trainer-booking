<script lang="ts">
	import type { Term } from '$lib/types';
	import H1 from '../../components/H1.svelte';
	import { getDotw, formatDate } from '$lib';

	let { data } = $props();
	let terms: Term[] = $state(data.terms);

	let date: string = $state('');
	let time_start: string = $state('');
	let time_end: string = $state('');
	let location: string = $state('');
	let type: string = $state('');

	async function loadTerms() {
		const res = await fetch('/api/load-terms');
		if (!res.ok) {
			console.log('Error fetching terms.');
		}
		terms = await res.json();
	}

	async function addTerm() {
		const date_convertor = new Date(date);
		const timestamp = (date_convertor.getTime() / 1000).toString();
		const res = await fetch('/api/add-term', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				date: timestamp,
				timeStart: time_start,
				timeEnd: time_end,
				location: location,
				type: type
			})
		});
		if (!res.ok) {
			console.log('Error adding term.');
		}
		loadTerms();
	}

	async function removeTerm(term_id: number) {
		const res = await fetch('/api/delete-term', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: term_id
			})
		});
		if (!res.ok) {
			console.log('Error deleting term.');
		}
		loadTerms();
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
			<button class="ml-8 cursor-pointer" onclick={(e) => removeTerm(term.id)}>Odstranit</button>
		</div>
	{/each}
	<!-- form -->
	<div class="pt-4">
		<label>
			Datum
			<input bind:value={date} type="date" />
		</label>
		<label>
			Od
			<input bind:value={time_start} type="time" />
		</label>
		<label>
			Do
			<input bind:value={time_end} type="time" />
		</label>
		<label>
			Misto konani
			<input bind:value={location} type="text" class="w-64" />
		</label>
		<br />
		<br />
		<label>
			Typ / popis
			<input bind:value={type} type="text" class="w-128" />
		</label>
		<button class="ml-4 cursor-pointer" onclick={addTerm}>Pridat</button>
	</div>
</div>

<!-- <H1 text="Prihlasky"></H1>
<div class="px-4 pb-4">
	{#each Object.entries(bookings) as [id, booking]}
		<div class="mt-4 bg-slate-300">
			<div class="flex flex-row pt-2">
				<div class="">{booking.name}</div>
				<div class="pl-4">{booking.lastname}</div>
				<div class="pl-4">{booking.email}</div>
				<button class="ml-8 cursor-pointer" onclick={(e) => removeBooking(id)}>Odstranit</button>
			</div>
			<div class="flex flex-row pt-2">
				<div class="">{terms[booking.term_id].dotw}</div>
				<div class="pl-4">{terms[booking.term_id].date}</div>
				<div class="pl-4">{terms[booking.term_id].time}</div>
			</div>
		</div>
	{/each}
</div> -->
