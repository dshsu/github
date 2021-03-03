package com.finalproject.BPALapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.finalproject.BPALapp.repository")
@SpringBootApplication
public class BpaLappApplication {

	public static void main(String[] args) {
		SpringApplication.run(BpaLappApplication.class, args);
	}

}
