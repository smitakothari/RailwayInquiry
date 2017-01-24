package com.jlabs.indianrailway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;

/**
 * Created by smita on 1/23/17.
 */
@Configuration
public class WebMvcConfigurerAdapter {

    @Bean
    public org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter forwardToIndex() {
        return new org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter() {
            @Override
            public void addViewControllers(ViewControllerRegistry registry) {
                // forward requests to /admin and /user to their index.html
                registry.addViewController("/pnr").setViewName(
                        "forward:/index.html");
                registry.addViewController("/trainStatus").setViewName(
                        "forward:/index.html");
            }
        };
    }

}
