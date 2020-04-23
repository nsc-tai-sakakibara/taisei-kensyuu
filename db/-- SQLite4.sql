
CREATE TABLE artists(
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE music(
    id INTEGER PRIMARY KEY,
    name TEXT,
    album_id INTEGER,
    media_id INTEGER,
    genre_id INTEGER,
    writer TEXT,
    second INTEGER,
    FOREIGN KEY(album_id)REFERENCES album(id),
    FOREIGN KEY(genre_id)REFERENCES genre(id)
);

CREATE TABLE album(
    id INTEGER PRIMARY KEY,
    title TEXT,
    artists_id INTEGER,
    FOREIGN KEY(artists_id)REFERENCES artists(id)
);

CREATE TABLE genre(
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE media(
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE list(
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE music_media(
    media_id INTEGER,
    music_id INTEGER,
    PRIMARY KEY(media_id,music_id),
    FOREIGN KEY(media_id)REFERENCES media(id),
    FOREIGN KEY(music_id)REFERENCES music(id)
);

CREATE TABLE music_playlist(
    list_id INTEGER,
    music_id INTEGER,
    PRIMARY KEY(list_id,music_id),
    FOREIGN KEY(list_id)REFERENCES list(id),
    FOREIGN KEY(music_id)REFERENCES music(id)
);

DROP TABLE music_playlist;