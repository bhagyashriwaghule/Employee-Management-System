package com.thekiranacademy.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFounfException extends RuntimeException {
	public  ResourceNotFounfException(String message)
	{
		super(message);
	}

}
