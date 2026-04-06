<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Imperial Electric Service | Quality, Reliable and Trustworthy</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
<style>
  :root {
    --brand-color: #000000;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin:0;
    font-family: 'Roboto', sans-serif;
    color: #222;
    background: #fff;
    line-height: 1.6;
  }
  a {
    color: var(--brand-color);
    text-decoration: none;
  }
  header {
    background: var(--brand-color);
    color: #fff;
    padding: 3rem 1.5rem 4rem;
    text-align: center;
  }
  header h1 {
    margin: 0 0 1rem;
    font-weight: 700;
    font-size: 2.75rem;
    letter-spacing: 1px;
  }
  header p {
    font-weight: 400;
    font-size: 1.25rem;
    margin: 0 auto;
    max-width: 480px;
    letter-spacing: 0.03em;
  }
  main {
    max-width: 1200px;
    padding: 2rem 1.5rem 4rem;
    margin: 0 auto;
  }
  section {
    margin-bottom: 4rem;
  }
  .section-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--brand-color);
    margin-bottom: 1rem;
    border-left: 5px solid var(--brand-color);
    padding-left: 0.75rem;
  }
  .problem-solution {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .problem-solution > div {
    flex: 1 1 320px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    padding: 1.75rem 1.5rem;
    border-radius: 6px;
  }
  .problem-solution h3 {
    color: var(--brand-color);
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  .services-list {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
    gap: 1.75rem 2rem;
  }
  .service-item {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 1.5rem 1.25rem;
    background: #fff;
    box-shadow: 0 0 6px rgb(0 0 0 / 0.05);
    font-weight: 500;
    color: #333;
    transition: box-shadow 0.3s ease;
  }
  .service-item:hover {
    box-shadow: 0 0 12px rgb(0 0 0 / 0.15);
  }
  .social-proof {
    background: #f5f5f5;
    padding: 2rem 1.5rem;
    border-radius: 6px;
  }
  .social-proof h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 700;
    color: var(--brand-color);
  }
  .testimonial {
    max-width: 800px;
    margin: 0 auto;
    font-style: italic;
    color: #444;
  }
  .testimonial cite {
    display: block;
    margin-top: 1rem;
    font-style: normal;
    font-weight: 700;
    color: var(--brand-color);
  }
  .cta {
    background: var(--brand-color);
    color: #fff;
    text-align: center;
    padding: 3rem 1.5rem;
    border-radius: 6px;
  }
  .cta h2 {
    margin: 0 0 1rem;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 0.04em;
  }
  .cta button {
    background: #fff;
    color: var(--brand-color);
    border: none;
    padding: 0.9rem 2.4rem;
    font-size: 1.125rem;
    font-weight: 700;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .cta button:hover,
  .cta button:focus {
    background-color: #ddd;
    outline: none;
  }
  @media (max-width: 700px) {
    header h1 {
      font-size: 2rem;
    }
    header p {
      font-size: 1.1rem;
    }
  }
</style>
</head>
<body>
<header>
  <h1>Imperial Electric Service</h1>
  <p>Quality, Reliable and Trustworthy</p>
</header>
<main>
  <section aria-labelledby="problem-solution-title">
    <h2 id="problem-solution-title" class="section-title">The Challenge & Our Precision Solution</h2>
    <div class="problem-solution">
      <div>
        <h3>Electrical Projects Demand Quality and Dependability</h3>
        <p>In residential, commercial, and industrial environments, subpar electrical work risks safety, efficiency, and costly downtime. Finding a partner who meets deadlines while upholding the highest standards can be a challenge.</p>
      </div>
      <div>
        <h3>Imperial Electric Service Delivers Excellence Every Time</h3>
        <p>Our team's expertise, combined with rigorous quality control, ensures every installation, retrofit, or maintenance task meets your expectations for reliability and safety. We tailor our solutions to your specific needs, delivering long-term value and peace of mind.</p>
      </div>
    </div>
  </section>
  <section aria-labelledby="services-title">
    <h2 id="services-title" class="section-title">Our Comprehensive Electrical Services</h2>
    <div class="services-list">
      <div class="service-item">Residential Electrical Services</div>
      <div class="service-item">Commercial Electrical Services</div>
      <div class="service-item">Solar Construction Services</div>
      <div class="service-item">Design-Build Tenant Improvements</div>
      <div class="service-item">Service Work</div>
      <div class="service-item">Facility Maintenance</div>
      <div class="service-item">Retrofits</div>
      <div class="service-item">Site & Utility Work</div>
      <div class="service-item">New Installations</div>
    </div>
  </section>
  <section class="social-proof" aria-labelledby="testimonial-title">
    <h3 id="testimonial-title">Trusted by Clients Across the United States</h3>
    <blockquote class="testimonial">
      “Imperial Electric Service consistently provides professional, timely, and top-quality electrical solutions for our residential and commercial projects. Their dedication to safety and craft is unmatched.”<br />
      <cite>– Michael R., Construction Project Manager</cite>
    </blockquote>
  </section>
</main>
<section class="cta" aria-labelledby="cta-title">
  <h2 id="cta-title">Experience the Imperial Difference Today</h2>
  <button onclick="location.href='mailto:contact@imperialelectricservice.com'">Request a Consultation</button>
</section>
</body>
</html>