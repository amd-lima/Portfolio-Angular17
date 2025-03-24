import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialoagPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogCertificationsComponent } from '../dialogs/dialog-certifications/dialog-certifications.component';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {

  #dialog = inject(MatDialog);

  public certifications = signal<IProjects[]>([
    {
      src: 'assets/img/project/engsoftware.png',
      alt: 'Certified Software Engineer',
      title: 'Bachelor of Software Engineering - Unicesumar',
      width: '100px',
      height: '100px',
      description: "<p>Completed a Bachelor's degree in Software Engineering from UniCesumar (2020 - 2024), with solid training in software development, system design, and project management best practices.</p>",
      links: [
        {
          name: 'See the certification on Linkedin',
          href: 'https://www.linkedin.com/in/amandarll/details/certifications/',
        },
      ],
    },
    {
      src: 'assets/img/project/english-test.png',
      alt: 'English test result - Go Fluent',
      title: 'English test result - Go Fluent',
      width: '100px',
      height: '100px',
      description: "<p>Achieved a strong proficiency level in English through Go Fluent's official assessment, demonstrating excellent communication skills for professional environments.</p>",
      links: [
        {
          name: 'See the certification on Linkedin',
          href: 'https://www.linkedin.com/in/amandarll/details/certifications/',
        },
      ],
    },
    {
      src: 'assets/img/project/CEF.png',
      alt: 'Consulting excellence',
      title: 'Consulting excellence - IDEA9',
      width: '100px',
      height: '100px',
      description:
        '<p>Completed the Consulting Excellence training by IDEA9, focusing on consulting mindset, sales strategies, impactful communication, teamwork, and conflict resolution skills.</p>',
      links: [
        {
          name: 'See the certification on Linkedin',
          href: 'https://www.linkedin.com/in/amandarll/details/certifications/',
        },
      ],
    },
    {
      src: 'assets/img/project/DP900.png',
      alt: 'Azure Data Fundamentals',
      title: 'Azure Data Fundamentals - Microsoft',
      width: '100px',
      height: '100px',
      description: '<p>Certified in DP-900: Microsoft Azure Data Fundamentals, covering core data concepts, relational and non-relational data on Azure, and data analytics solutions.</p>',
      links: [
        {
          name: 'See the badge on Credly',
          href: 'https://www.credly.com/badges/6956fb34-3d7f-414c-ac55-4a3bb96b1d36/linked_in_profile',
        },
      ],
    },
    {
      src: 'assets/img/project/pl-900.png',
      alt: 'Power Platform Fundamentals',
      title: 'Power Platform Fundamentals - Microsoft',
      width: '100px',
      height: '50px',
      description: '<p>Certified in PL-900: Microsoft Power Platform Fundamentals, with knowledge of Power BI, Power Apps, Power Automate, and Power Virtual Agents to build business solutions.</p>',
      links: [
        {
          name: 'See the badge on Credly',
          href: 'https://www.credly.com/badges/f6739819-5bc6-4310-931e-f8eb47de3f73/linked_in_profile',
        },
      ],
    },
    {
      src: 'assets/img/project/AZ900.png',
      alt: 'Azure Fundamentals',
      title: 'Azure Fundamentals - Microsoft',
      width: '100px',
      height: '50px',
      description: '<p>Certified in AZ-900: Microsoft Azure Fundamentals, demonstrating foundational knowledge of cloud concepts, Azure services, and core solutions.</p>',
      links: [
        {
          name: 'See the badge on Credly',
          href: 'https://www.credly.com/badges/2228ffb4-611a-4a51-b14b-7e1a41b6637a/linked_in_profile',
        },
      ],
    },
    {
      src: 'assets/img/project/okr.png',
      alt: 'OKR',
      title: 'Estrategia de negócios com OKR - DIO',
      width: '100px',
      height: '50px',
      description:
        '<p>Completed training in Business Strategy with OKR (Objectives and Key Results) from Digital Innovation One (DIO), learning how to align business goals with measurable outcomes.</p>',
      links: [
        {
          name: 'See the certification on Linkedin',
          href: 'https://www.linkedin.com/in/amandarll/details/certifications/',
        },
      ],
    },
    {
      src: 'assets/img/project/pbb.png',
      alt: 'Product Backlog',
      title: 'Product Backlog Building - Caroli.org',
      width: '100px',
      height: '50px',
      description:
        '<p>Completed the Product Backlog Building (PBB) workshop by Fabio Aguiar at Caroli.org, learning effective techniques for building and refining backlogs in agile environments.</p>',
      links: [
        {
          name: 'See the certification on Linkedin',
          href: 'https://www.linkedin.com/in/amandarll/details/certifications/',
        },
      ],
    },
    {
      src: 'assets/img/project/PSM.png',
      alt: 'Scrum Master',
      title: 'Professional Scrum Master I- Scrum.org',
      width: '100px',
      height: '50px',
      description:
        '<p>Professional Scrum Master I (PSM I) certification have demonstrated a fundamental level of Scrum mastery, including the concepts of applying Scrum, and proven an understanding of Scrum as described in the Scrum Guide. This individual has also demonstrated a consistent use of terminology and approach to Scrum.</p>',
      links: [
        {
          name: 'See the badge on Credly',
          href: 'https://www.credly.com/badges/5a347429-d292-4a4e-bfe2-5fabbf6f3986/linked_in_profile',
        },
      ],
    },
    {
      src: 'assets/img/project/scrumFundation.png',
      alt: 'Scrum Fundation',
      title: 'Scrum Fundation Professional certification - CertiProf',
      width: '100px',
      height: '50px',
      description:
        '<p>Certified in Scrum Foundation Professional by CertiProf, confirming understanding of Scrum fundamentals and its role in agile project delivery.</p>',
      links: [
        {
          name: 'See the badge on Credly',
          href: 'https://www.credly.com/badges/bba9accf-1f71-4ab9-b8e0-dd97340651ad/linked_in_profile',
        },
      ],
    },
    {
      src: 'assets/img/project/webDevelopment.png',
      alt: 'Web Development',
      title: 'Responsive Web Development - FIAP',
      width: '100px',
      height: '50px',
      description: '<p>Completed the Responsive Web Development course at FIAP, gaining practical skills to create adaptive and mobile-friendly web applications.</p>',
      links: [
        {
          name: 'See the certification on Linkedin',
          href: 'https://www.linkedin.com/in/amandarll/details/certifications/',
        },
      ],
    },
    {
      src: 'assets/img/project/formacaoemlideranca.jpg',
      alt: 'Formação em Liderança',
      title: 'Formação em Liderança - Conquer',
      width: '100px',
      height: '50px',
      description: '<p>Completed the Leadership Training program at Conquer, focused on developing leadership, communication, and people management skills.</p>',
      links: [
        {
          name: 'See the certification on Linkedin',
          href: 'https://www.linkedin.com/in/amandarll/details/certifications/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogCertificationsComponent, {
      data,
      panelClass: EDialoagPanelClass.CERTIFICATIONS,
    });
  }
}
