SELECT user_id, username, email FROM users 
WHERE (username = $1 AND password = $2);