// import { Client, Account, Databases, Storage, Avatars } from "appwrite";

// export const appwriteConfig = {
//   projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
//   url: import.meta.env.VITE_APPWRITE_URL,
// };

// export const client = new Client();

// client.setProject(appwriteConfig.projectId);
// client.setEndpoint(appwriteConfig.url);

// export const databases = new Databases(client);
// export const account = new Account(client);
// export const storage = new Storage(client);
// export const avatars = new Avatars(client);

import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
  dataBaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
  saveCollectionId: import.meta.env.VITE_APPWRITE_SAVE_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
};

// Debug: Check if environment variables are loaded
console.log("Project ID:", appwriteConfig.projectId);
console.log("URL:", appwriteConfig.url);

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
