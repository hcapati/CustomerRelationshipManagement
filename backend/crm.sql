CREATE TABLE Details(
details_id SERIAL       PRIMARY KEY,
preferred_contact       varchar(255)         
);

INSERT INTO Details(preferred_contact)
VALUES
('email'),
('phone');

CREATE TABLE Customers(
customer_id SERIAL      PRIMARY KEY,
name                    varchar(50),
email                   varchar(50),
phone                   varchar(50),
age                     integer,
details_id              integer REFERENCES Details (details_id)
);

INSERT INTO Customers(name, email, phone, age, details_id)
VALUES
('Richard Burke', 'drburke@gmail.com', '212-444-2323', 45, 2),
('Janice Hosenstein', 'omg@gmail.com', '917-122-7878', 30, 1),
('Pete Becker', 'beckerp@gmail.com', '212-321-1231', 32, 1),
('Mike Hannigan', 'mike.hannigan@gmail.com', '718-997-4949', 31, 2);

CREATE TABLE Employees(
employee_id SERIAL      PRIMARY KEY,
name                    varchar(50),
email                   varchar(50),
phone                   varchar(50)
);

INSERT INTO Employees(name, email, phone)
VALUES
('Monica Gellar', 'mgellar@gmail.com', '718-444-2323'),
('Chandler Bing', 'chanchanman@gmail.com', '212-121-8789'),
('Rachel Green', 'rach@gmail.com', '917-444-7845'),
('Regina Phalange', 'phalange@gmail.com', '718-432-2278'),
('Ken Adams', 'ken.adams@gmail.com', '212-789-0900');

CREATE TABLE StatusTypes(
status_id SERIAL        PRIMARY KEY,
status_type             varchar(50)
);

INSERT INTO StatusTypes(status_type)
VALUES
('open'),
('attempting contact'),
('converted/qualified'),
('disqualified'),
('not engaged'),
('working'),
('converted with no oportunity');

CREATE TABLE PriorityTypes(
priority_id SERIAL      PRIMARY KEY,
priority_type           varchar(50)
);

INSERT INTO PriorityTypes(priority_type)
VALUES
('low'),
('medium'),
('high');

CREATE TABLE Leads(
lead_id SERIAL          PRIMARY KEY,
last_contact            timestamp,
status_id               integer REFERENCES StatusTypes (status_id),
priority_id             integer REFERENCES PriorityTypes (priority_id),
customer_id             integer REFERENCES Customers (customer_id),
owner_id                integer REFERENCES Employees (employee_id)
);

INSERT INTO Leads(last_contact, status_id, priority_id, customer_id, owner_id)
VALUES
('2019-01-17 08:00:32', 7, 1, 2, 1),
('2019-01-13 10:20:12', 2, 3, 3, 2),
('2019-01-10 15:15:53', 5, 1, 4, 4),
('2019-01-15 13:05:08', 6, 2, 1, 5),
('2019-01-14 11:45:00', 3, 2, 4, 3);

CREATE TABLE Interactions(
interaction_id SERIAL   PRIMARY KEY,
comment                 varchar(255),
date_time               timestamp,
duration                integer,
lead_id                 integer REFERENCES Leads (lead_id),
employee_id             integer REFERENCES Employees (employee_id)
);

INSERT INTO Interactions(comment, date_time, duration, lead_id, employee_id)
VALUES
('negotiating contract', '2019-01-11 09:30:01', 10, 1, 1),
('spoke yesterday', '2019-01-03 13:25:22', 20, 2, 2),
('still deciding, on the fence', '2019-01-05 14:25:34', 5, 3, 4),
('wants to be called back tomorrow', '2019-07-11 15:24:27', 2, 4, 5),
('left message to call back', '2019-01-06 11:24:13', 5, 5, 3);
