package com.thekiranacademy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thekiranacademy.entity.Employee;
@Repository
public interface EmployeeRepository  extends JpaRepository<Employee, Integer>{
	

}
