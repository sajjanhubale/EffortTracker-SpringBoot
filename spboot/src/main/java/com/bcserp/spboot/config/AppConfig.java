package com.bcserp.spboot.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("com.*")
@EnableAutoConfiguration
@SpringBootApplication
public class AppConfig extends SpringBootServletInitializer{

	@Override
	 protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	        return application.sources(AppConfig.class);
	    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SpringApplication.run(AppConfig.class, args);
	}

}
