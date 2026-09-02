export type Service = { title:string; description:string; price:string; duration:string; icon:string; category:string };
export type Companion = { name:string; age:number; image:string; languages:string; interests:string; rating:number; price:string; location:string; availability:string; verified:boolean };
export type EventItem = { title:string; date:string; time:string; place:string; level:string; icon:string };
export const services: Service[] = [
 {title:'Companion Visit',description:'A friendly presence for conversation, errands and a little more ease.',price:'From ₹499',duration:'1 hour',icon:'HeartHandshake',category:'Companionship'},
 {title:'Walking Partner',description:'Enjoy a gentle walk and good company at your pace.',price:'From ₹299',duration:'45 mins',icon:'Footprints',category:'Companionship'},
 {title:'Technology Help',description:'Patient, practical help with phones, apps and staying in touch.',price:'From ₹399',duration:'1 hour',icon:'Smartphone',category:'Everyday Help'},
 {title:'Hospital Assistance',description:'A trusted hand for appointments, visits and getting home comfortably.',price:'From ₹799',duration:'2 hours',icon:'Hospital',category:'Healthcare'},
 {title:'Caregiver Support',description:'Reliable help with routines, meals and everyday wellbeing.',price:'From ₹699',duration:'2 hours',icon:'HandHeart',category:'Care'},
 {title:'Nurse Home Visit',description:'Qualified nursing support at home, coordinated with your family.',price:'From ₹999',duration:'1 hour',icon:'Stethoscope',category:'Healthcare'},
 {title:'Physiotherapy',description:'Movement support that helps you stay strong and independent.',price:'From ₹899',duration:'45 mins',icon:'Activity',category:'Healthcare'},
 {title:'Doctor Appointment Help',description:'Schedule, accompany and keep the details organized.',price:'From ₹499',duration:'1 hour',icon:'CalendarCheck',category:'Healthcare'},
 {title:'Medicine Reminder',description:'Kind, consistent reminders to keep routines on track.',price:'From ₹199',duration:'Daily',icon:'Pill',category:'Everyday Help'},
 {title:'Community Events',description:'Find joyful activities, new friends and familiar faces.',price:'Free to join',duration:'Varies',icon:'Sparkles',category:'Community'}
];
export const companions: Companion[] = [
 {name:'Ananya Rao',age:24,image:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&q=85',languages:'English, Hindi, Kannada',interests:'Reading, music, morning walks',rating:4.9,price:'₹450/hr',location:'Indiranagar',availability:'Weekday mornings',verified:true},
 {name:'Arjun Menon',age:29,image:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=85',languages:'English, Malayalam, Tamil',interests:'Cricket, cooking, technology',rating:4.8,price:'₹400/hr',location:'Koramangala',availability:'Evenings',verified:true},
 {name:'Meera Shah',age:26,image:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=85',languages:'English, Hindi, Gujarati',interests:'Art, gardening, films',rating:5.0,price:'₹500/hr',location:'Jayanagar',availability:'Flexible',verified:true},
 {name:'Kabir Singh',age:31,image:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=85',languages:'English, Hindi, Punjabi',interests:'Walks, history, chess',rating:4.9,price:'₹450/hr',location:'Whitefield',availability:'Weekends',verified:true},
 {name:'Nisha Joseph',age:27,image:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=85',languages:'English, Tamil, Telugu',interests:'Music, yoga, baking',rating:4.7,price:'₹400/hr',location:'HSR Layout',availability:'Weekday evenings',verified:true},
 {name:'Rohan Das',age:25,image:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=85',languages:'English, Bengali, Hindi',interests:'Books, photography, travel',rating:4.8,price:'₹425/hr',location:'Malleshwaram',availability:'Flexible',verified:true}
];
export const events: EventItem[] = [
 {title:'Morning Yoga',date:'12 Sep',time:'7:00 AM',place:'Cubbon Park',level:'Gentle pace',icon:'Sunrise'}, {title:'Music Evening',date:'14 Sep',time:'5:30 PM',place:'The Courtyard, Indiranagar',level:'Easy & social',icon:'Music2'}, {title:'Gardening Workshop',date:'18 Sep',time:'10:00 AM',place:'Green Patch Studio',level:'Hands-on',icon:'Flower2'}, {title:'Smartphone Class',date:'20 Sep',time:'11:00 AM',place:'EverSaath Studio',level:'Learn together',icon:'Smartphone'}, {title:'Book Club',date:'22 Sep',time:'4:00 PM',place:'Atta Galatta',level:'Easy & social',icon:'BookOpen'}, {title:'Day Outing',date:'28 Sep',time:'8:00 AM',place:'Nandi Hills',level:'Moderate',icon:'MapPinned'}, {title:'Meditation Session',date:'30 Sep',time:'6:30 AM',place:'Online & at home',level:'Gentle pace',icon:'Flower2'}, {title:'Birthday Celebration',date:'05 Oct',time:'4:30 PM',place:'EverSaath Community House',level:'Festive',icon:'Cake'}
];
