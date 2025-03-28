<script lang="ts">
	import type { Term } from '$lib/types';
	import H1 from '../../components/H1.svelte';

	let { data } = $props();
	let terms: Term[] = $state(data.terms);

	let date: string = $state('');
	let time_start: string = $state('');
	let time_end: string = $state('');
	let location: string = $state('');
	let type: string = $state('');

	let date_convertor: Date = $state(new Date());
	let day: number = $state(0);
	let month: number = $state(0);
	let year: number = $state(0);

	function dotw_translator(index: number) {
		switch (index) {
			case 1:
				return 'Po';
			case 2:
				return 'Út';
			case 3:
				return 'St';
			case 4:
				return 'Čt';
			case 5:
				return 'Pá';
			case 6:
				return 'So';
			case 7:
				return 'Ne';
			default:
				return '';
		}
	}

	async function loadTerms() {
		const res = await fetch('/api/admin/load-terms');
		if (!res.ok) {
			console.log('Error fetching terms.');
		}
		terms = await res.json();
	}

	async function addTerm() {
		const dotw_convertor: Date = new Date(date);
		const index = dotw_convertor.getDay();
		const dotw = dotw_translator(index);
		const res = await fetch('/api/admin/add-term', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				dotw: dotw,
				date: date,
				timeStart: time_start,
				timeEnd: time_end,
				location: 'location',
				type: 'off-ice'
			})
		});
		if (!res.ok) {
			console.log('Error adding term.');
		}
		loadTerms();
	}

	async function removeTerm(id: number) {
		const res = await fetch('/api/admin/delete-term', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: id
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
	{#each Object.entries(terms) as [id, term]}
		<div class="flex flex-row pt-2">
			<div class="">{term.dotw}</div>
			<div class="pl-4">{term.date}</div>
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
