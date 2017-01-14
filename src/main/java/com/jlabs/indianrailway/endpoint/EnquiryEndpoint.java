package com.jlabs.indianrailway.endpoint;

import com.jlabs.indianrailway.domain.Railway;
import com.jlabs.indianrailway.service.EnquiryService;
import com.jlabs.indianrailway.service.RailwayEnquiry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by smita on 1/3/17.
 */
@RestController
public class EnquiryEndpoint {

    @Autowired
    private EnquiryService enquiryService;

    @Autowired
    private RailwayEnquiry railwayEnquiry;


    @RequestMapping(method = RequestMethod.GET, value = "/trainlivestatus/{trainNumber}", produces = "applicaton/json")
    public Railway getLiveStatus(@PathVariable String trainNumber){
        return  railwayEnquiry.enquiry(trainNumber);
//        return enquiryService.getLiveStatus();
    }


    @RequestMapping(method = RequestMethod.GET, value = "/pnr/{pnrNumber}", produces = "application/json")
    public Railway getPNRNumber(@PathVariable String pnrNumber){
        return  railwayEnquiry.enquiry(pnrNumber);
    }
}
