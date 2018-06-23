<template>
	<div class="container">
		<table class="table table-striped table-bordered">
			<thead>
				<tr>
					<th>First Name</th><th>Last Name</th><th>Email</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in Users">
					<td>{{user.firstname}}</td>
					<td>{{user.lastname}}</td>
					<td>{{user.email}}</td>
				</tr>
			</tbody>
		</table>
		<router-link to="/">
		<button class="btn btn-lg btn-block btn-primary">Add User</button>
	</router-link>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name: 'Users',
		data(){
			return {
				Users: [],
			}

		},
		mounted(){
			axios.get('http://localhost:3100/users').then((res) => {
				console.log(res.data);
				this.Users = res.data;
			}).catch((error) => console.log(error));
			
		}
}
</script>
<style scoped>
</style>