<script>
	let password = '';

	async function login() {
		const res = await fetch('/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ password })
		});

		if (res.ok) {
			window.location.href = '/admin'; // Redirect to admin after login
		} else {
			alert('Invalid password');
		}
	}
</script>

<div class="pt-8">
	<input type="password" class="w-128" bind:value={password} placeholder="Enter admin password" />
	<button onclick={login} class="cursor-pointer bg-white">Login</button>
</div>
