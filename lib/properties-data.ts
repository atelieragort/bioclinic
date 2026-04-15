export const properties = [
  {
    id: 1,
    title: "Clinical",
    location: "New York City, NY",
    time: 25,
    role: 19,
    image: "https://img.freepik.com/premium-photo/woman-white-lab-coat-with-stethoscope-her-neck-stands-hospital_889227-23106.jpg?size=626&ext=jpg&ga=GA1.1.791313403.1692618127&semt=sph"
  },
  {
    id: 2,
    title: "Reaserch",
    location: "Miami, FL",
    time: 500000,
    role: 25,
    image: "https://media.istockphoto.com/id/1373258553/photo/smiling-mature-doctor-in-hospital-hallway.jpg?b=1&s=612x612&w=0&k=20&c=bA1fovbHbETnnjusgEd3Y4D6XAi92pTXhvn4GqJaxZY="
  },
  {
    id: 3,
    title: "Service",
    location: "San Francisco, CA",
    price: 750000,
    role: 39,
    image: "https://img.freepik.com/free-photo/confident-female-doctor-with-reports-clipboard-standing-against-male-patient-hospital_662251-3027.jpg?size=626&ext=jpg&ga=GA1.1.791313403.1692618127&semt=sph"
  },
]

export type Property = {
  id: number
  title: string
  location: string
  price: number
  roi: number
  image: string
} 