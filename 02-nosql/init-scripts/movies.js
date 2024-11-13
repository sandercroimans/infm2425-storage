// Initialize database and collections
db = db.getSiblingDB('movie_db');

// Studios Collection with specified _id
db.studios.insertMany([
    { _id: ObjectId("6505ec5f1d4f3a1a30a5f111"), name: "Warner Bros.", location: "Burbank, California", founded_year: 1923 },
    { _id: ObjectId("6505ec5f1d4f3a1a30a5f112"), name: "Universal Pictures", location: "Universal City, California" },
    { _id: ObjectId("6505ec5f1d4f3a1a30a5f113"), name: "Miramax Films", location: "New York City, New York", notable_films: ["Pulp Fiction"] },
    { _id: ObjectId("6505ec5f1d4f3a1a30a5f114"), name: "Paramount Pictures", location: "Hollywood, California", subsidiaries: ["Nickelodeon Movies"] },
    { _id: ObjectId("6505ec5f1d4f3a1a30a5f115"), name: "20th Century Fox", location: "Los Angeles, California", subsidiary_of: "Walt Disney Studios" },
    { _id: ObjectId("6505ec5f1d4f3a1a30a5f116"), name: "Castle Rock Entertainment", location: "Beverly Hills, California", founders: ["Rob Reiner"] }
]);

// Directors Collection with specified _id
db.directors.insertMany([
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f211"), name: "Christopher Nolan", birth_year: 1970 },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f212"), name: "Steven Spielberg", birth_year: 1946, famous_for: ["Jurassic Park", "E.T."] },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f213"), name: "Quentin Tarantino", birth_year: 1963, unique_style: true, debut_film: "Reservoir Dogs" },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f214"), name: "Frank Darabont", birth_year: 1959 },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f215"), name: "Francis Ford Coppola", birth_year: 1939 },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f216"), name: "David Fincher", birth_year: 1962, genres: ["Thriller", "Drama"], active_years: { start: 1984 } },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f217"), name: "James Cameron", birth_year: 1954, awards: ["Oscar", "Golden Globe"], net_worth: "700 million USD" },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f218"), name: "The Wachowskis", birth_year: 1965 }
]);

// Actors Collection with specified _id
db.actors.insertMany([
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f311"), name: "Leonardo DiCaprio", birth_year: 1974, agent: { name: "Rick Yorn" } },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f312"), name: "Joseph Gordon-Levitt", birth_year: 1981, social_media: { twitter: "@hitRECordJoe" } },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f313"), name: "Elliot Page", birth_year: 1987 },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f314"), name: "Tom Hardy", birth_year: 1977, notable_roles: ["Mad Max", "Venom"], nationality: "British" },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f315"), name: "Sam Neill", birth_year: 1947 },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f316"), name: "Laura Dern", birth_year: 1967, awards: ["Oscar"], hobbies: ["Painting", "Photography"] },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f317"), name: "Jeff Goldblum", birth_year: 1952 },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f318"), name: "Christian Bale", birth_year: 1974, transformations: true },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f319"), name: "Heath Ledger", birth_year: 1979, iconic_role: "Joker" },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f320"), name: "Aaron Eckhart", birth_year: 1968 },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f321"), name: "Kate Winslet", birth_year: 1975, philanthropic_work: true },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f322"), name: "Keanu Reeves", birth_year: 1964, skills: ["Martial Arts"], charity_work: true },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f323"), name: "Laurence Fishburne", birth_year: 1961, directorial_debut: "Once in the Life" },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f324"), name: "Carrie-Anne Moss", birth_year: 1967, fashion_line: "Anna-Lily" }
]);

// Ratings Collection with specified _id
db.ratings.insertMany([
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f411"), rating: "G", description: "General Audiences" },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f412"), rating: "PG", description: "Parental Guidance Suggested" },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f413"), rating: "PG-13", description: "Parents Strongly Cautioned" },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f414"), rating: "R", description: "Restricted", age_limit: 17 },
    { _id: ObjectId("6505ec5f1d4f3a1a30d5f415"), rating: "NC-17", description: "Adults Only" }
]);

// Movies Collection with flexible structure, references, and denormalized data
db.movies.insertMany([
    {
        title: "Inception",
        release_year: 2010,
        genre: ["Sci-Fi", "Thriller"],
        studio: {
            id: ObjectId("6505ec5f1d4f3a1a30a5f111"), // Warner Bros.
            name: "Warner Bros."
        },
        director: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f211"), // Christopher Nolan
            name: "Christopher Nolan"
        },
        rating: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f413"), // PG-13
            rating: "PG-13"
        },
        cast: [
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f311"), // Leonardo DiCaprio
                    name: "Leonardo DiCaprio"
                },
                role: "Cobb"
            },
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f312"), // Joseph Gordon-Levitt
                    name: "Joseph Gordon-Levitt"
                },
                role: "Arthur"
            },
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f313"), // Elliot Page
                    name: "Elliot Page"
                },
                role: "Ariadne"
            },
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f314"), // Tom Hardy
                    name: "Tom Hardy"
                },
                role: "Eames"
            }
        ],
        runtime_minutes: 148,
        soundtracks: ["Dream Is Collapsing"]
    },
    {
        title: "Jurassic Park",
        release_year: 1993,
        genre: ["Adventure", "Sci-Fi"],
        studio: {
            id: ObjectId("6505ec5f1d4f3a1a30a5f112"), // Universal Pictures
            name: "Universal Pictures"
        },
        director: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f212"), // Steven Spielberg
            name: "Steven Spielberg"
        },
        rating: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f413"), // PG-13
            rating: "PG-13"
        },
        cast: [
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f315"), // Sam Neill
                    name: "Sam Neill"
                },
                role: "Dr. Alan Grant"
            },
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f316"), // Laura Dern
                    name: "Laura Dern"
                },
                role: "Dr. Ellie Sattler"
            },
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f317"), // Jeff Goldblum
                    name: "Jeff Goldblum"
                },
                role: "Dr. Ian Malcolm"
            }
        ],
        theme_park_tie_in: true,
        special_effects: "Animatronics"
    },
    {
        title: "The Dark Knight",
        release_year: 2008,
        genre: ["Action", "Drama"],
        studio: {
            id: ObjectId("6505ec5f1d4f3a1a30a5f111"), // Warner Bros.
            name: "Warner Bros."
        },
        director: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f211"), // Christopher Nolan
            name: "Christopher Nolan"
        },
        rating: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f413"), // PG-13
            rating: "PG-13"
        },
        cast: [
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f318"), // Christian Bale
                    name: "Christian Bale"
                },
                role: "Bruce Wayne/Batman"
            },
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f319"), // Heath Ledger
                    name: "Heath Ledger"
                },
                role: "Joker"
            },
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f320"), // Aaron Eckhart
                    name: "Aaron Eckhart"
                },
                role: "Harvey Dent"
            }
        ],
        box_office: "1.005 billion USD",
        awards: ["Best Supporting Actor"]
    },
    {
        title: "The Matrix",
        release_year: 1999,
        genre: ["Sci-Fi", "Action"],
        studio: {
            id: ObjectId("6505ec5f1d4f3a1a30a5f111"), // Warner Bros.
            name: "Warner Bros."
        },
        director: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f218"), // The Wachowskis
            name: "The Wachowskis"
        },
        rating: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f414"), // R
            rating: "R"
        },
        cast: [
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f322"), // Keanu Reeves
                    name: "Keanu Reeves"
                },
                role: "Neo"
            },
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f323"), // Laurence Fishburne
                    name: "Laurence Fishburne"
                },
                role: "Morpheus"
            },
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f324"), // Carrie-Anne Moss
                    name: "Carrie-Anne Moss"
                },
                role: "Trinity"
            }
        ],
        groundbreaking_effects: true
    },
    {
        title: "Pulp Fiction",
        release_year: 1994,
        genre: ["Crime", "Drama"],
        studio: {
            id: ObjectId("6505ec5f1d4f3a1a30a5f113"), // Miramax Films
            name: "Miramax Films"
        },
        director: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f213"), // Quentin Tarantino
            name: "Quentin Tarantino"
        },
        rating: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f414"), // R
            rating: "R"
        },
        cast: [
            { name: "John Travolta", role: "Vincent Vega" },
            { name: "Samuel L. Jackson", role: "Jules Winnfield" },
            { name: "Uma Thurman", role: "Mia Wallace" }
        ],
        nonlinear_storytelling: true,
        soundtrack_highlight: "Misirlou"
    },
    {
        title: "The Godfather",
        release_year: 1972,
        genre: ["Crime", "Drama"],
        studio: {
            id: ObjectId("6505ec5f1d4f3a1a30a5f114"), // Paramount Pictures
            name: "Paramount Pictures"
        },
        director: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f215"), // Francis Ford Coppola
            name: "Francis Ford Coppola"
        },
        rating: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f414"), // R
            rating: "R"
        },
        cast: [
            { name: "Marlon Brando", role: "Vito Corleone" },
            { name: "Al Pacino", role: "Michael Corleone" },
            { name: "James Caan", role: "Sonny Corleone" }
        ],
        awards: ["Best Picture", "Best Actor"],
        trilogy: true
    },
    {
        title: "Titanic",
        release_year: 1997,
        genre: ["Romance", "Drama"],
        studio: {
            id: ObjectId("6505ec5f1d4f3a1a30a5f114"), // Paramount Pictures
            name: "Paramount Pictures"
        },
        director: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f217"), // James Cameron
            name: "James Cameron"
        },
        rating: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f413"), // PG-13
            rating: "PG-13"
        },
        cast: [
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f311"), // Leonardo DiCaprio
                    name: "Leonardo DiCaprio"
                },
                role: "Jack Dawson"
            },
            {
                actor: {
                    id: ObjectId("6505ec5f1d4f3a1a30d5f321"), // Kate Winslet
                    name: "Kate Winslet"
                },
                role: "Rose DeWitt Bukater"
            }
        ],
        budget: "200 million USD",
        box_office: "2.195 billion USD",
        ship_replica_built: true
    },
    {
        title: "Avatar",
        release_year: 2009,
        genre: ["Sci-Fi", "Adventure"],
        studio: {
            id: ObjectId("6505ec5f1d4f3a1a30a5f115"), // 20th Century Fox
            name: "20th Century Fox"
        },
        director: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f217"), // James Cameron
            name: "James Cameron"
        },
        rating: {
            id: ObjectId("6505ec5f1d4f3a1a30d5f413"), // PG-13
            rating: "PG-13"
        },
        cast: [
            { name: "Sam Worthington", role: "Jake Sully" },
            { name: "Zoe Saldana", role: "Neytiri" },
            { name: "Sigourney Weaver", role: "Dr. Grace Augustine" }
        ],
        budget: "237 million USD",
        box_office: "2.847 billion USD",
        motion_capture_technology: true,
        sequels_planned: 4
    }
]);
