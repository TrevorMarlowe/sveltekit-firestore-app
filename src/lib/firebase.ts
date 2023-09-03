import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCH8Kp160gg11O1nBR0Onb0vKK2mWPO-bM',
	authDomain: 'svelte-course-5618d.firebaseapp.com',
	projectId: 'svelte-course-5618d',
	storageBucket: 'svelte-course-5618d.appspot.com',
	messagingSenderId: '976032270730',
	appId: '1:976032270730:web:cfa5ba7d374084577ce073',
	measurementId: 'G-BER1T1Z907'
};

//Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
