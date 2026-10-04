const { initializeApp, cert } = require("firebase-admin/app");

let app;

if (
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY
) {
    app = initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
        })
    });

    console.log("Firebase initialized successfully using environment variables");
} else {
    const serviceAccount = require("./firebase-service-account.json");

    app = initializeApp({
        credential: cert(serviceAccount)
    });

    console.log("Firebase initialized successfully using local service account");
}

module.exports = app;