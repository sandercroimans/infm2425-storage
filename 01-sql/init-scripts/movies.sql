-- Drop tables if they already exist
DROP TABLE IF EXISTS Movie_Actor, Movies, Actors, Directors, Studios, Ratings CASCADE;

-- Create Studios table
CREATE TABLE Studios (
    studio_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100)
);

-- Insert data into Studios table
INSERT INTO Studios (name, location) VALUES
('Warner Bros.', 'Burbank, California'),          -- studio_id 1
('Universal Pictures', 'Universal City, California'), -- studio_id 2
('Miramax Films', 'New York City, New York'),      -- studio_id 3
('Paramount Pictures', 'Hollywood, California'),   -- studio_id 4
('20th Century Fox', 'Los Angeles, California'),   -- studio_id 5
('Castle Rock Entertainment', 'Beverly Hills, California'); -- studio_id 6

-- Create Directors table
CREATE TABLE Directors (
    director_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    birth_year INT
);

-- Insert data into Directors table
INSERT INTO Directors (name, birth_year) VALUES
('Christopher Nolan', 1970),            -- director_id 1
('Steven Spielberg', 1946),             -- director_id 2
('Quentin Tarantino', 1963),            -- director_id 3
('Frank Darabont', 1959),               -- director_id 4
('Francis Ford Coppola', 1939),         -- director_id 5
('David Fincher', 1962),                -- director_id 6
('James Cameron', 1954),                -- director_id 7
('The Wachowskis', 1965);               -- director_id 8

-- Create Actors table
CREATE TABLE Actors (
    actor_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    birth_year INT
);

-- Insert data into Actors table
INSERT INTO Actors (name, birth_year) VALUES
('Leonardo DiCaprio', 1974),          -- actor_id 1
('Joseph Gordon-Levitt', 1981),       -- actor_id 2
('Elliot Page', 1987),                -- actor_id 3
('Tom Hardy', 1977),                  -- actor_id 4
('Sam Neill', 1947),                  -- actor_id 5
('Laura Dern', 1967),                 -- actor_id 6
('Jeff Goldblum', 1952),              -- actor_id 7
('Christian Bale', 1974),             -- actor_id 8
('Heath Ledger', 1979),               -- actor_id 9
('Aaron Eckhart', 1968),              -- actor_id 10
('John Travolta', 1954),              -- actor_id 11
('Samuel L. Jackson', 1948),          -- actor_id 12
('Uma Thurman', 1970),                -- actor_id 13
('Tim Robbins', 1958),                -- actor_id 14
('Morgan Freeman', 1937),             -- actor_id 15
('Marlon Brando', 1924),              -- actor_id 16
('Al Pacino', 1940),                  -- actor_id 17
('James Caan', 1940),                 -- actor_id 18
('Brad Pitt', 1963),                  -- actor_id 19
('Edward Norton', 1969),              -- actor_id 20
('Helena Bonham Carter', 1966),       -- actor_id 21
('Sam Worthington', 1976),            -- actor_id 22
('Zoe Saldana', 1978),                -- actor_id 23
('Sigourney Weaver', 1949),           -- actor_id 24
('Kate Winslet', 1975),               -- actor_id 25
('Keanu Reeves', 1964),               -- actor_id 26
('Laurence Fishburne', 1961),         -- actor_id 27
('Carrie-Anne Moss', 1967);           -- actor_id 28

-- Create Ratings table
CREATE TABLE Ratings (
    rating_id SERIAL PRIMARY KEY,
    rating CHAR(5),
    description VARCHAR(50)
);

-- Insert data into Ratings table
INSERT INTO Ratings (rating, description) VALUES
('G', 'General Audiences'),                   -- rating_id 1
('PG', 'Parental Guidance Suggested'),        -- rating_id 2
('PG-13', 'Parents Strongly Cautioned'),      -- rating_id 3
('R', 'Restricted'),                          -- rating_id 4
('NC-17', 'Adults Only');                     -- rating_id 5

-- Create Movies table with direct references to Studios and Directors
CREATE TABLE Movies (
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    release_year INT,
    genre VARCHAR(50),
    studio_id INT REFERENCES Studios(studio_id),
    director_id INT REFERENCES Directors(director_id),
    rating_id INT REFERENCES Ratings(rating_id)
);

-- Insert data into Movies table
INSERT INTO Movies (title, release_year, genre, studio_id, director_id, rating_id) VALUES
('Inception', 2010, 'Sci-Fi', 1, 1, 3),           -- movie_id 1
('Jurassic Park', 1993, 'Adventure', 2, 2, 3),    -- movie_id 2
('The Dark Knight', 2008, 'Action', 1, 1, 3),     -- movie_id 3
('Pulp Fiction', 1994, 'Crime', 3, 3, 4),         -- movie_id 4
('The Shawshank Redemption', 1994, 'Drama', 6, 4, 4), -- movie_id 5
('The Godfather', 1972, 'Crime', 4, 5, 4),        -- movie_id 6
('Fight Club', 1999, 'Drama', 5, 6, 4),           -- movie_id 7
('Avatar', 2009, 'Sci-Fi', 5, 7, 3),              -- movie_id 8
('Titanic', 1997, 'Romance', 4, 7, 3),            -- movie_id 9
('The Matrix', 1999, 'Sci-Fi', 1, 8, 4);          -- movie_id 10

-- Create Movie_Actor junction table for many-to-many relationship between Movies and Actors
CREATE TABLE Movie_Actor (
    movie_id INT REFERENCES Movies(movie_id) ON DELETE CASCADE,
    actor_id INT REFERENCES Actors(actor_id),
    PRIMARY KEY (movie_id, actor_id)
);

-- Insert data into Movie_Actor table
-- Inception
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES
(1, 1),  -- Leonardo DiCaprio
(1, 2),  -- Joseph Gordon-Levitt
(1, 3),  -- Elliot Page
(1, 4);  -- Tom Hardy

-- Jurassic Park
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES
(2, 5),  -- Sam Neill
(2, 6),  -- Laura Dern
(2, 7);  -- Jeff Goldblum

-- The Dark Knight
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES
(3, 8),  -- Christian Bale
(3, 9),  -- Heath Ledger
(3, 10); -- Aaron Eckhart

-- Pulp Fiction
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES
(4, 11), -- John Travolta
(4, 12), -- Samuel L. Jackson
(4, 13); -- Uma Thurman

-- The Shawshank Redemption
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES
(5, 14), -- Tim Robbins
(5, 15); -- Morgan Freeman

-- The Godfather
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES
(6, 16), -- Marlon Brando
(6, 17), -- Al Pacino
(6, 18); -- James Caan

-- Fight Club
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES
(7, 19), -- Brad Pitt
(7, 20), -- Edward Norton
(7, 21); -- Helena Bonham Carter

-- Avatar
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES
(8, 22), -- Sam Worthington
(8, 23), -- Zoe Saldana
(8, 24); -- Sigourney Weaver

-- Titanic
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES
(9, 1),  -- Leonardo DiCaprio
(9, 25); -- Kate Winslet

-- The Matrix
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES
(10, 26), -- Keanu Reeves
(10, 27), -- Laurence Fishburne
(10, 28); -- Carrie-Anne Moss
