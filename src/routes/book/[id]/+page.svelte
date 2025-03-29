<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let { data } = $props();
	let term_id = data.term_id;

	let tel = $state('');
	let email = $state('');
	let name = $state('');
	let message = $state('');

	async function addBooking() {
		const res = await fetch('/api/add-booking', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				termId: parseInt(term_id),
				tel: tel,
				email: email,
				name: name,
				message: message
			})
		});
		if (!res.ok) {
			console.log('Error adding booking.');
		}
		goto('/success');
	}
</script>

<div class="pt-8">
	<label for="name">
		Jmeno
		<input type="text" name="name" bind:value={name} />
	</label>
	<label for="text">
		Tel.
		<input type="tel" name="tel" bind:value={tel} />
	</label>
	<label for="text">
		Email
		<input type="email" name="email" bind:value={email} />
	</label>
</div>
<div class="pt-8">
	<button class="cursor-pointer" onclick={addBooking}>Odeslat</button>
</div>
