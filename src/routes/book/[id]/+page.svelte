<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Bookings, LastIdBookings } from '$lib/store';

	let { data } = $props();
	let id = data.term_id;

	let name = $state();
	let lastname = $state();
	let email = $state();

	let bookings_last_id = $state();
	LastIdBookings.subscribe((store) => {
		bookings_last_id = store;
	});

	function addBooking() {
		Bookings.update((store) => {
			store[bookings_last_id + 1] = {
				term_id: Number(id),
				name: name,
				lastname: lastname,
				email: email
			};
			return store;
		});
		LastIdBookings.update((store) => {
			return store + 1;
		});
		goto('/success');
	}
</script>

<div class="pt-8">
	<label for="name">Jmeno</label>
	<input type="text" name="name" bind:value={name} />
	<label for="lastname">Prijmeni</label>
	<input type="text" name="lastname" bind:value={lastname} />
</div>
<div class="pt-8">
	<label for="email">Email</label>
	<input type="text" name="email" bind:value={email} />
</div>
<div class="pt-8">
	<button class="cursor-pointer" onclick={(e) => addBooking()}>Odeslat</button>
</div>
