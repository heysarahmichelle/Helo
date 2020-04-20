CREATE TABLE post ( 
post_id SERIAL PRIMARY KEY, 
user_id INTERGER REFERENCES users(users_id),
title VARCHAR(200), 
image VARCHAR(20), 
content VARCHAR(200) 
);

