export default function DecorativeElements() {
    return (
        <>
            {/* Floating Particles */}
            <div className="particle" style={{ top: '10%', left: '10%' }} />
            <div className="particle" style={{ top: '20%', left: '80%', animationDelay: '-5s' }} />
            <div className="particle" style={{ top: '60%', left: '20%', animationDelay: '-10s' }} />
            <div className="particle" style={{ top: '80%', left: '70%', animationDelay: '-3s' }} />

            {/* Decorative Blobs */}
            <div className="blob fixed top-20 -left-32 w-96 h-96 bg-primary/5 pointer-events-none" />
            <div
                className="blob fixed bottom-20 -right-32 w-96 h-96 bg-primary/5 pointer-events-none"
                style={{ animationDelay: '-4s' }}
            />
        </>
    );
}
