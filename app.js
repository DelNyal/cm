<script>
const urlParams = new URLSearchParams(window.location.search);

const somedata = urlParams.get('url');
alert(somedata);
fetch('https://tikvm.com/api/user/post/?unique_id='+somedata) // Replace with your API endpoint URL

  .then(response => response.json())

  .then(data => {

   alert(data);

    console.log(data);

  })

  .catch(error => {

    // Handle any errors

    console.error('Error:', error);

  });
</script>
