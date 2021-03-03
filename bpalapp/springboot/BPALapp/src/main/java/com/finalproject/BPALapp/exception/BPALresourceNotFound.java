package com.finalproject.BPALapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class BPALresourceNotFound extends RuntimeException{

		private static final long serialVersionUID = 1L;
		
		public BPALresourceNotFound(String message) {
			super(message);
		}
}


