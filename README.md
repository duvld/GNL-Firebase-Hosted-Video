# Video Application Details
Key Concepts:

* Token Generation
* Dependency Structure
* Locally vs. Firebase Hosted

## video_locally_hosted
npm package that contains a locally hosted video communication web app. 

### How to use it:
In the root folder run **npm start**
Go to http://localhost:3000    
Put in a room name and click Join Room    
Open a new tab and put in the same room name and click Join Room. You should be able to see two of your camera  

## video_firebase_hosted
npm package that fits a more standard dependency structure (compare this structure with video_locally_hosted)

### How to use it:
Go to https://translo-bcdd1.firebaseapp.com  
Click Start Session. You would see your camera once, but the following error will probably show
If you see the error: **token must be string** then the Twilio auto-generated token has expired  

To fix the error perform the following:  
Run **npm start** on the video_locally_hosted root  
Go to http://localhost:3000/token  
Copy the token string and go to video_firebase_hosted/src/VideoComponent.js    
In the componentDidMount() function:   

	replace the token with the token string from http://localhost:3000/token  
	replace the identity with the identity string from http://localhost:3000/token
    
Save the VideoComponent.js file and run **npm run rbuild** in the root folder for video_firebase_hosted  
Then run the following command: **firebase deploy --project translo-bcdd1**  
Go to https://translo-bcdd1.firebaseapp.com
Click Start Session. You would see your camera once
