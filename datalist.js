const store=['Ajino Motto','Akhrot','Almond','Aloo Chips','Ammavat','Anjeer','Arhar Dal','Ariel Liquid','Atta','Atta Noodles','Badi Elaichi','Bedaam','Besan','Bhura','Biryani Masala','Biryani Rice','Biscuits','Black Pepper','Black Salt','Bournvita','Bread','Brown Sugar','Butter','Chana Chur','Chana Dal','Chana Masala','Cheeri','Chhat Masala','Chicken Masala','Chilli powder','Chilli Sauce','Chocolates','Chowmein','Chowmein (Half-Boil)','Chuhara','Chura','ChywanPrash','Closeup','Coconut','Coconut Powder','Coffee','Comfort','Complan','Condom','Coriander powder','Dal Chini','Dettol Handwash','Dettol Soap','Elaichi','Facewash','Ghee','Granier Shampoo','Green Pea Frozen','Gulab Jal','Hit','Honey','Horlicks','Humaad','Incense stick','Incense stick mosquito 🦟','Jamun Sirka','Japhar','Javitri','Jeera','Jeera Powder','Kachha Suta','Kaju','Kalva','Kaphoor','Kebab Chini','Keoda Jal','Khajoor','Kishmish','Laung','Macaroni','Maggi','Maida','Makhana','Mangrela','Masoor Dal','Meat Masala','Mittha','Mixture','Moong Dal','Mosquito Coil','Mosquito Liquid','Munakka','Mustard Sauce','Namkeen Pista','Navgrah Lakdi','Navrattan Oil','Nivea Cream','Nivea Deo','Nivea Facewash','Odomos','Oil','Paneer Masala','Pantene Shampoo','Pao Bhaji Masala','Pasta Masala','Pista','Razor','Refined','RoohAfza','Rose Syrup','Sab Gol Bhusi','Sada Pista','Sah Jeera','Salt','Sanitary Pad','Sattu','Schezwan Chutney','Sendha Namak','Shampoo','Shoe Brush','Singhara','Soan-Papdi','Soap','Soozi','Soya Chunks','Soya Sauce','Star','Sugar','Surf-Excel','Tal-Mishri','Tomato Puree','Tomato Sauce','Tresemme Shampoo','Turmeric powder','Urad Dal','Vinegar','Visible White','Wilkinson Blade',];
const artist=['A. R. Rahman','Abhijeet Bhattacharya','Akhil','Amaal Mallik','Ami Mishra','Amit Trivedi','Ankit Tiwari','Arijit Singh','Armaan Malik','Arjun-Kanungo','Ash King','Atif-Aslam','Ayushmann Khurrana','B-Praak','Babbu Maan','Babul Supriyo','Badshah','Bappi Lahiri','Benny Dayal','Bohemia','Bpraak','Daler Mehndi','Darshan-Raval','Dhanush','Diljit Dosanjh','Gajendra Verma','Gulzaar-Chhaniwala','Gurdas Maan','Guru Randhawa','Hansraj-Raghuwanshi','Happy Raikoti','Himesh Reshammiya','Jagjit Singh','Ikka','Jassie-Gill','Javed Ali','Jeet Gannguli','Jubin Nautiyal','Kishore Kumar','Kailash Kher','KK','Kumar Sanu','Master Saleem','Meet Bros','Mika Singh','Mohammed Aziz','Mohammed Irfan','Mohammed Rafi','Mohit Chauhan','Nakash Aziz','Nitin Mukesh','Pankaj Udhas','Papon','Pritam','R. D. Burman','Raftaar','Rahat-Fateh-Ali-Khan','Rahul Vaidya','S. D. Burman','Roop Kumar Rathod','S. P. Balasubrahmanyam','Sanam','Shaan','Shabab Sabri','Shankar Mahadevan','Sharry-Mann','Sid Sriram','Sidhu Moose Wala','Sonu Nigam','Sukhwinder Singh','Suresh Wadkar','Tanishk Bagchi','Tochi Raina','Tony Kakkar','Udit Narayan','Vishal Dadlani','Vishal Mishra','Yasser Desai','Yo Yo Honey Singh','DJ Nyk','DJ Chetas','Dj Dalal','Aastha-Gill','Akriti Kakar','Alka Yagnik','Anuradha Paudwal','Asees Kaur','Asha Bhosle','Chinmayi','Dhvani Bhanushali','Hard Kaur','Falguni Pathak','Harshdeep Kaur','Jasmine Sandlas','Jonita Gandhi','Jyotica Tangri','Kanika Kapoor','Lata Mangeshkar','Mahalakshmi Iyer','Mamta Sharma','Monali Thakur','Neeti Mohan','Neha Kakkar','Nikhita Gandhi','Palak Muchhal','Parampara Tandon','Rekha Bhardwaj','Shalmali Kholgade','Sharda Sinha','Shilpa Rao','Shirley Setia','Shreya Ghoshal','Shreya-Ghoshal','Shruti Pathak','Shweta Pandit','Shweta Mohan','Sona Mohapatra','Sonu Kakkar','Sunanda Sharma','Sunidhi Chauhan','Tulsi Kumar','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];
const train=['PATNA TO VARANASI','PATNA TO DELHI ','PATNA TO GAYA','PATNA TO VINDYACHAL',];
const link=[];

$.each(store,function(j, data) {
var ul_datp = ['<option value="'+store[j]+'">'+'<option value="'+artist[j]+'">'+'<option value="'+train[j]+'">'+];
            $("#anr").append(ul_datp);
   
   });
