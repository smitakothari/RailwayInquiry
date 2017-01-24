package com.jlabs.indianrailway.context;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.servlet.http.HttpServletRequest;

import static javax.swing.text.html.FormSubmitEvent.MethodType.GET;

/**
 * Created by smita on 1/3/17.
 */
@SpringBootApplication
@Controller
@Configuration
@ComponentScan("com.jlabs.indianrailway")
public class Application extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

//    @RequestMapping(value = {"/","/pnr"}, method = RequestMethod.GET, produces = "")
//    public String index() {
//        return "index";
//    }


    @Bean
    public WebMvcConfigurerAdapter forwardToIndex() {
        return new WebMvcConfigurerAdapter() {
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
