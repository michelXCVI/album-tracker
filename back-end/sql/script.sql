CREATE TABLE albums(
album_ID INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
album_title VARCHAR (255),
artist VARCHAR (255),
record_label VARCHAR (255),
date_released DATE,
genre VARCHAR (255),
album_rating DECIMAL CHECK (album_rating >= 1 AND album_rating <=5 )
)
DROP TABLE albums 

INSERT INTO albums (album_title ,artist ,record_label ,date_released ,genre ,album_rating )
VALUES ('Alfredo', 'Freddie Gibbs, The Alchemist', 'ESGN, EMPIRE, ALC', '05/29/2020', 'Hip hop', 4.5)




CREATE TABLE users (
user_ID INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
firstName VARCHAR(255),
lastName VARCHAR (255),
email VARCHAR (255),
username VARCHAR (255) UNIQUE,
userPassword VARCHAR (255),
albums INTEGER REFERENCES albums (album_ID)
)
DROP TABLE users 