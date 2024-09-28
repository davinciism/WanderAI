/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
  
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};
  

export const chatSession = model.startChat({
    generationConfig,
    history: [
    {
        role: "user",
        parts: [
        {text: "Suggest top 3 getaways in India for a adventurous trip for 2 days with a cheap budget. Generate a list of itineraries for each day with the place name, place detail, geocoordinates, in JSON format wrapped within trips that's it."},
        ],
    },
    {
        role: "model",
        parts: [
        {text: "```json\n{\n  \"trips\": [\n    {\n      \"Place\": \"Rishikesh, Uttarakhand\",\n      \"Details\": \"Known as the 'Yoga Capital of the World', Rishikesh offers a unique blend of spirituality and adventure. Experience thrilling white-water rafting, explore ancient temples, and enjoy breathtaking views of the Himalayas.\",\n      \"Geocoordinates\": [30.0754, 78.2259],\n      \"Itinerary\": [\n        {\n          \"Day\": 1,\n          \"Activities\": [\n            \"Morning: Arrive in Rishikesh and check into your budget-friendly guesthouse.\",\n            \"Afternoon: Experience the thrill of white-water rafting on the Ganges River.\",\n            \"Evening: Visit Lakshman Jhula, a beautiful suspension bridge over the Ganges, and enjoy a delicious dinner at a local eatery.\"\n          ]\n        },\n        {\n          \"Day\": 2,\n          \"Activities\": [\n            \"Morning: Explore the ancient temples of Rishikesh, including the Triveni Ghat, where the Ganga, Yamuna, and Saraswati rivers meet.\",\n            \"Afternoon: Attend a yoga class or take a dip in the holy Ganges River.\",\n            \"Evening: Enjoy a farewell dinner at a riverside restaurant, savoring the local flavors, before departing.\"\n          ]\n        }\n      ]\n    },\n    {\n      \"Place\": \"Hogenakkal Falls, Tamil Nadu\",\n      \"Details\": \"Experience the cascading beauty of Hogenakkal Falls, often called the 'Niagara Falls of India'. Enjoy boat rides, soak in the refreshing water, and witness the scenic beauty of the surrounding landscapes.\",\n      \"Geocoordinates\": [12.0458, 78.1208],\n      \"Itinerary\": [\n        {\n          \"Day\": 1,\n          \"Activities\": [\n            \"Morning: Arrive at Hogenakkal Falls and check into a budget-friendly guesthouse.\",\n            \"Afternoon: Enjoy a thrilling boat ride amidst the cascading falls, taking in the scenic beauty.\",\n            \"Evening: Relax by the river, enjoy local cuisine, and witness the mesmerizing sunset.\"\n          ]\n        },\n        {\n          \"Day\": 2,\n          \"Activities\": [\n            \"Morning: Explore the nearby natural rock formations and enjoy a refreshing dip in the cool waters of the falls.\",\n            \"Afternoon: Indulge in a traditional South Indian lunch and take a leisurely walk through the picturesque surroundings.\",\n            \"Evening: Depart from Hogenakkal Falls, cherishing the memories of this unique adventure.\"\n          ]\n        }\n      ]\n    },\n    {\n      \"Place\": \"Coorg, Karnataka\",\n      \"Details\": \"Known as the 'Scotland of India', Coorg is a paradise for adventure enthusiasts. Explore coffee plantations, trek through lush forests, and enjoy breathtaking views of the Western Ghats.\",\n      \"Geocoordinates\": [12.3407, 75.7557],\n      \"Itinerary\": [\n        {\n          \"Day\": 1,\n          \"Activities\": [\n            \"Morning: Arrive in Coorg and check into a budget-friendly homestay or lodge.\",\n            \"Afternoon: Explore the scenic coffee plantations, enjoying the aromatic coffee and lush greenery.\",\n            \"Evening: Experience the thrill of trekking through the lush forests, discovering hidden waterfalls and panoramic views.\"\n          ]\n        },\n        {\n          \"Day\": 2,\n          \"Activities\": [\n            \"Morning: Visit Abbey Falls, a mesmerizing waterfall surrounded by scenic landscapes.\",\n            \"Afternoon: Relax at a local cafe, savoring authentic Coorg cuisine and enjoying the cool mountain air.\",\n            \"Evening: Depart from Coorg, carrying with you unforgettable memories of this adventurous escape.\"\n          ]\n        }\n      ]\n    }\n  ]\n}\n``` \n"},
        ],
    },
    ],
});
  
