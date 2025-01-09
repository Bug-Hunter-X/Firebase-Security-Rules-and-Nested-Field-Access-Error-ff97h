The solution involves adding checks to handle potential null values and implementing secure Firebase Realtime Database rules.
```javascript
db.ref('users/' + userId + '/profile/address').once('value', function(snapshot) {
  var address = snapshot.val();
  if (address && address.street) {
    var street = address.street;
    console.log(street);
  } else {
    console.log('Address or street field not found.');
  }
});

//Secure Firebase Realtime Database rule:
'.read': true,
'.write': false //Restrict writing for better security
```
This improved code first checks if the 'address' node exists and then further checks if the 'street' field within it exists before accessing it.  This approach prevents runtime errors and ensures the application handles the absence of data gracefully. Secure rules are also essential to protect data integrity.