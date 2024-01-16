import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projects = signal<IProjects[]>([
    {
      src: 'assets/img/project/apk-flashlight.png',
      alt: 'turn on and turn off the flashlight when shaking the phone',
      title: 'App flashlight',
      width:'100px',
      height: '100px',
      description: '<p> turn on and turn off the flashlight when shaking the phone</p>',
      links: [
        {
          name: 'See the code on Github',
          href: 'https://github.com/amd-lima/apk-flashlight'
        }
      ]
    },
    {
      src: 'assets/img/project/app-expenses.png',
      alt: 'App expenses',
      title: 'Web App expenses',
      width:'100px',
      height: '100px',
      description: '<p> This project calculates annual expenses. </p>',
      links: [
        {
          name: 'See the code on Github',
          href: 'https://github.com/amd-lima/Web-App-Expenses'
        }
      ]
    },
    {
      src: 'assets/img/project/form-validation.png',
      alt: 'Form validation',
      title: 'Form validation',
      width:'100px',
      height: '100px',
      description: '<p> Form validation with JS </p>',
      links: [
        {
          name: 'See the code on Github',
          href: 'https://github.com/amd-lima/AulasJS/tree/main/POO/FormularioDeCadastro'
        }
      ]
    },
    {
      src: 'assets/img/project/generate-snake.png',
      alt: 'snake github',
      title: 'Snake ate the commits',
      width:'100px',
      height: '50px',
      description: '<p> workflow to generate snake to ate the commits on github </p>',
      links: [
        {
          name: 'See the code on Github',
          href: 'https://github.com/amd-lima/amd-lima/actions/runs/7535740292/workflow'
        }
      ]
    },
    {
      src: 'assets/img/project/simple-form-react.png',
      alt: 'simple-form-react',
      title: 'Form validation with React',
      width:'100px',
      height: '50px',
      description: '<p> Form made using react </p>',
      links: [
        {
          name: 'See the code on Github',
          href: 'https://github.com/amd-lima/Simple-form-react'
        }
      ]
    },
    {
      src: 'assets/img/project/tip-calculator.png',
      alt: 'tip calculator',
      title: 'Tip calculator',
      width:'100px',
      height: '50px',
      description: '<p> Calculate tip using JS, CHALLENGE OF Frontend Mentor </p>',
      links: [
        {
          name: 'See the code on Github',
          href: 'https://github.com/amd-lima/TipCalculator'
        }
      ]
    },

  ])

}
