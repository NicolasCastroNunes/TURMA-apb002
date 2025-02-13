-- min
SELECT MIN(salary) as SALARIO_BAIXO FROM salaries; 

SELECT salary FROM salaries ORDER BY salary asc LIMIT 1;

select count(*) from salaries;
select count(*) from salaries where gender = 'M';

-- LIKE (*PESQUISAR)
-- termo% -> desconsidera final
SELECT * FROM employees WHERE first_name LIKE "Geo%";
-- %termo -> desconsidera inicio
SELECT * FROM employees WHERE first_name LIKE "%or";
-- %termo% -> desconsidera começo e fim
SELECT * FROM employees WHERE first_name LIKE "%ni%";

SELECT * FROM employees WHERE last_name IN ("Kalloufi","Genin");

SELECT * FROM salaries WHERE SALARY BETWEEN "4000" AND '5000';


