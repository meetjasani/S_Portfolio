import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { CgWebsite } from "react-icons/cg";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Blogs() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Container>

                    <div class="container my-5">
                        <div class="row justify-content-center">
                            <div class="col-lg-9">
                                <h1 class="mb-3">Contact  <strong className="purple">Us </strong> </h1>
                                <form>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label for="your-name" class="form-label">Your Name</label>
                                            <input type="text" class="form-control" id="your-name" name="your-name" required />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="your-surname" class="form-label">Your Surname</label>
                                            <input type="text" class="form-control" id="your-surname" name="your-surname" required />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="your-email" class="form-label">Your Email</label>
                                            <input type="email" class="form-control" id="your-email" name="your-email" required />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="your-subject" class="form-label">Your Subject</label>
                                            <input type="text" class="form-control" id="your-subject" name="your-subject" />
                                        </div>
                                        <div class="col-12">
                                            <label for="your-message" class="form-label">Your Message</label>
                                            <textarea class="form-control" id="your-message" name="your-message" rows="5" required></textarea>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <Button
                                                        variant="primary"
                                                        target="_blank"
                                                        style={{ marginLeft: "10px" , width: '-webkit-fill-available'}}
                                                    >
                                                        {"Send"}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
        </div>
    );
}

export default Blogs;
