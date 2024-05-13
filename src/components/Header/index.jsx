import { Container, Profile } from './styles';

export function Header(){
    return(
        <Container>
            <Profile>
                <img 
                    src="https://github.com/leosantosp.png"
                    alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Leonardo Santos</strong>
                </div>
            </Profile>
        </Container>
    )
}