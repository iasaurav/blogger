const store=['Ajino Motto','Akhrot','Almond','Aloo Chips','Ammavat','Anjeer','Arhar Dal','Ariel Liquid','Atta','Atta Noodles','Badi Elaichi','Bedaam','Besan','Bhura','Biryani Masala','Biryani Rice','Biscuits','Black Pepper','Black Salt','Bournvita','Bread','Brown Sugar','Butter','Chana Chur','Chana Dal','Chana Masala','Cheeri','Chhat Masala','Chicken Masala','Chilli powder','Chilli Sauce','Chocolates','Chowmein','Chowmein (Half-Boil)','Chuhara','Chura','ChywanPrash','Closeup','Coconut','Coconut Powder','Coffee','Comfort','Complan','Condom','Coriander powder','Dal Chini','Dettol Handwash','Dettol Soap','Elaichi','Facewash','Ghee','Granier Shampoo','Green Pea Frozen','Gulab Jal','Hit','Honey','Horlicks','Humaad','Incense stick','Incense stick mosquito 🦟','Jamun Sirka','Japhar','Javitri','Jeera','Jeera Powder','Kachha Suta','Kaju','Kalva','Kaphoor','Kebab Chini','Keoda Jal','Khajoor','Kishmish','Laung','Macaroni','Maggi','Maida','Makhana','Mangrela','Masoor Dal','Meat Masala','Mittha','Mixture','Moong Dal','Mosquito Coil','Mosquito Liquid','Munakka','Mustard Sauce','Namkeen Pista','Navgrah Lakdi','Navrattan Oil','Nivea Cream','Nivea Deo','Nivea Facewash','Odomos','Oil','Paneer Masala','Pantene Shampoo','Pao Bhaji Masala','Pasta Masala','Pista','Razor','Refined','RoohAfza','Rose Syrup','Sab Gol Bhusi','Sada Pista','Sah Jeera','Salt','Sanitary Pad','Sattu','Schezwan Chutney','Sendha Namak','Shampoo','Shoe Brush','Singhara','Soan-Papdi','Soap','Soozi','Soya Chunks','Soya Sauce','Star','Sugar','Surf-Excel','Tal-Mishri','Tomato Puree','Tomato Sauce','Tresemme Shampoo','Turmeric powder','Urad Dal','Vinegar','Visible White','Wilkinson Blade',];
const artist=['A. R. Rahman,Aastha-Gill','Abhijeet Bhattacharya,Akriti Kakar','Akhil,Alka Yagnik','Amaal Mallik,Anuradha Paudwal','Ami Mishra,Asees Kaur','Amit Trivedi,Asha Bhosle','Ankit Tiwari,Chinmayi','Arijit Singh,Dhvani Bhanushali','Armaan Malik,Hard Kaur','Arjun-Kanungo,Falguni Pathak','Ash King,Harshdeep Kaur','Atif-Aslam,Jasmine Sandlas','Ayushmann Khurrana,Jonita Gandhi','B-Praak,Jyotica Tangri','Babbu Maan,Kanika Kapoor','Babul Supriyo,Lata Mangeshkar','Badshah,Mahalakshmi Iyer','Bappi Lahiri,Mamta Sharma','Benny Dayal,Monali Thakur','Bohemia,Neeti Mohan','Bpraak,Neha Kakkar','Daler Mehndi,Nikhita Gandhi','Darshan-Raval,Palak Muchhal','Dhanush,Parampara Tandon','Diljit Dosanjh,Rekha Bhardwaj','Gajendra Verma,Shalmali Kholgade','Gulzaar-Chhaniwala,Sharda Sinha','Gurdas Maan,Shilpa Rao','Guru Randhawa,Shirley Setia','Hansraj-Raghuwanshi,Shreya Ghoshal','Happy Raikoti,Shreya-Ghoshal','Himesh Reshammiya,Shruti Pathak','Jagjit Singh,Shweta Pandit','Ikka,Shweta Mohan','Jassie-Gill,Sona Mohapatra','Javed Ali,Sonu Kakkar','Jeet Gannguli,Sunanda Sharma','Jubin Nautiyal,Sunidhi Chauhan','Kishore Kumar,Tulsi Kumar','Kailash Kher,','KK,','Kumar Sanu,','Master Saleem,','Meet Bros,','Mika Singh,','Mohammed Aziz,','Mohammed Irfan,','Mohammed Rafi,','Mohit Chauhan,','Nakash Aziz,','Nitin Mukesh,','Pankaj Udhas,','Papon,','Pritam,','R. D. Burman,','Raftaar,','Rahat-Fateh-Ali-Khan,','Rahul Vaidya,','S. D. Burman,','Roop Kumar Rathod,','S. P. Balasubrahmanyam,','Sanam,','Shaan,','Shabab Sabri,','Shankar Mahadevan,','Sharry-Mann,','Sid Sriram,','Sidhu Moose Wala,','Sonu Nigam,','Sukhwinder Singh,','Suresh Wadkar,','Tanishk Bagchi,','Tochi Raina,','Tony Kakkar,','Udit Narayan,','Vishal Dadlani,','Vishal Mishra,','Yasser Desai,','Yo Yo Honey Singh,','DJ Nyk,','DJ Chetas,','Dj Dalal,',];
const train=['PATNA TO VARANASI','PATNA TO DELHI ','PATNA TO GAYA','PATNA TO VINDYACHAL',];
const link=[];
$.each(store,function(j, data) {
var ul_datp = ['<option value="'+store[j]+'">'+'<option value="'+artist[j]+'">'+'<option value="'+train[j]+'">'+'<option value="'+link[j]+'">'];
            $("#anrede").append(ul_datp);
   
   });
            
