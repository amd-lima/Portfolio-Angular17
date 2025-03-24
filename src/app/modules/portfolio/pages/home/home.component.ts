import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { KnowledgeComponent } from '../../component/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../component/experiences/experiences.component';
import { CertificationsComponent } from '../../component/certifications/certifications.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesComponent, CertificationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
