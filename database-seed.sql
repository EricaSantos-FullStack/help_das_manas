CREATE TABLE person
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    career VARCHAR(80),
    description VARCHAR(200),
    linkedin VARCHAR(200),
    github VARCHAR(200),
    need_help text[],
    could_help text[]
);

INSERT INTO person(name, career, description, linkedin, github, need_help, could_help) VALUES
 ('Lais ', 'backend dev', 'Ser inspirada por pessoas incríveis!', 'https://www.linkedin.com/in/agata-martins-70020269/', 'https://github.com/flanaomi', '{"Estratégia de produto", "Gestão de stakeholders"}', '{"CSS", "HTML"}'),
 ('Carla dos Santos', 'Frontend dev', 'Me conectar com mulheres incríveis da área da tecnologia!', 'https://www.linkedin.com/in/agata-martins-70020269/', 'https://github.com/flanaomi', '{"Estratégia de produto", "Gestão de stakeholders"}', '{"HTML", "ADD"}'),
 ('Silvana ', 'backend dev', 'Ser inspirada por pessoas incríveis!', 'https://www.linkedin.com/in/agata-martins-70020269/', 'https://github.com/flanaomi', '{"Estratégia de produto", "Gestão de stakeholders"}', '{"Node.js", "Gestão"}')