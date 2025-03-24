import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public experiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Scrum master and Frontend Developer',
        p: 'Avanade | Jun 2023 - Present',
      },
      text: '<p>As a Frontend Analyst (mid-level), I specialize in developing dynamic and responsive web applications using Angular, TypeScript, and Git. My role involves implementing user-focused features, ensuring code quality, and optimizing performance to deliver seamless experiences.Additionally, I contribute as a Scrum Master, facilitating agile ceremonies, removing blockers, and fostering collaboration within the team to drive successful project outcomes. With expertise in frontend technologies and agile methodologies, I aim to create efficient solutions that align with business goals and enhance user satisfaction.</p>',
    },
    {
      summary: {
        strong: 'Full-stack intern',
        p: 'Avanade | Ago 2022 - Jun/2023'
      },
      text: '<p>I started my journey at Avanade as a full-stack intern, where I gained comprehensive knowledge during training in Node.js and React. In a challenging project, I expanded my skills by working with technologies such as Java, serverless and AWS Lambdas. Later, I was hired as a frontend developer, contributing to projects using OutSystems and Angular. Furthermore, I deepened my understanding of agile methodologies, highlighting my commitment to efficient software development and delivery practices.</p>',
    },
    {
      summary: {
        strong: 'Internship',
        p: 'IBM | Ago 2021 - Ago 2022',
      },
      text: '<p>As an intern at IBM, my work focused on the mainframe, natural language and JCL (Job Control Language). Additionally, I had the opportunity to contribute to a React project for a short period, expanding my knowledge of modern web development technologies.</p>',
    },
    {
      summary: {
        strong: 'Attendant trainer',
        p: 'Outback | Ago 2012 - Ago 2021',
      },
      text:"<p>In addition to performing typical customer service duties, I also played a crucial role in training new employees, conveying the company's practices and values to maintain high standards of customer service.</p>",
    },
  ]);
}
