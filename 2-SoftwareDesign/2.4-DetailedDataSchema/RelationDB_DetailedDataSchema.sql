drop table admin CASCADE;
drop table workers CASCADE;
drop table signature_form CASCADE;
drop table safety_doc CASCADE;
drop table online_message CASCADE;

CREATE TABLE admin(
	admin_id INT PRIMARY KEY,
	admin_name VARCHAR
);

CREATE TABLE workers(
	workers_id INT PRIMARY KEY,
	admin_id INT REFERENCES admin(admin_id),
	first_name VARCHAR CHECK(char_length(first_name) BETWEEN 2 AND 30 ),
	surname VARCHAR CHECK(char_length(surname) BETWEEN 2 AND 30),
        date_of_birth DATE,
	position VARCHAR,
        mobile VARCHAR CHECK (mobile ~* '^\+?3?8?(0[\s\.-]\d{2}[\s\.-]\d{3}[\s\.-]\d{2}[\s\.-]\d{2})$'),
	email VARCHAR CHECK(email ~* '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')
);

CREATE TABLE signature_form(
	signature_form INT PRIMARY KEY,
	signature VARCHAR,
        comment VARCHAR CHECK(char_length(locations_list) <= 500)
);

CREATE TABLE safety_doc(
        safety_doc_id INT PRIMARY KEY,
	document VARCHAR
);

CREATE TABLE online_message ( 
	onlineMessage_id INT PRIMARY KEY,
        workers_id INT REFERENCES workers(workers_id),
        admin_id INT REFERENCES admin(admin_id),
	email VARCHAR,  
	text VARCHAR 
);

