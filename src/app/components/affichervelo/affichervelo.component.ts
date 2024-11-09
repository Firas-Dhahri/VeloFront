import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VeloService } from 'src/app/services/velo-service.service';
import { Router } from '@angular/router';  // <-- Import Router

@Component({
  selector: 'app-affichervelo',
  templateUrl: './affichervelo.component.html',
  styleUrls: ['./affichervelo.component.css']
})
export class AfficherveloComponent {

  velos: any[] = [];
  selectedVeloId: number | undefined;
  newVelo: any = { /* initialize with the necessary fields, e.g., name, type, etc. */ };

  constructor(private veloService: VeloService, private toastr: ToastrService,    private router: Router  // <-- Inject Router
  ) { }

  ngOnInit(): void {
    this.afficherVelos();
  }

  // Fetch all velos
  afficherVelos(): void {
    this.veloService.afficherVelos().subscribe(
      (data: any[]) => {
        this.velos = data;
      },
      (error) => {
        console.error('Error fetching velos:', error);
      }
    );
  }
  ajouterVelo(): void {
    this.veloService.ajouterVelo(this.newVelo).subscribe(
      (response) => {
        this.toastr.success('Velo added successfully!');
        this.afficherVelos(); // Refresh list after adding
        this.newVelo = {}; // Reset form fields
      },
      (error) => {
        console.error('Error adding velo:', error);
        this.toastr.error('Failed to add velo');
      }
    );
  }
 // Navigate to edit velo page
 editVelo(velo: any): void {
  this.router.navigate(['/modifierVelo', velo.id]);
}

// Delete a velo
supprimerVelo(id: number): void {
  if (confirm('Are you sure you want to delete this velo?')) {
    this.veloService.supprimerVelo(id).subscribe(
      () => {
        this.toastr.success('Velo deleted successfully!');
        this.afficherVelos(); // Refresh list after deleting
      },
      (error) => {
        console.error('Error deleting velo:', error);
        this.toastr.error('Failed to delete velo');
      }
    );
  }
}

}